import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

/**
 * @swagger
 * /api/v1/college/list:
 *   get:
 *     tags:
 *       - Colleges
 *     summary: Get list of colleges pagination, also gives primary stream, city, state, country, and courses list which has colleges. with optional city filter by id.
 *     descriptin: Retrieve a paginated list of colleges. Results are sorted by score in descending order. Also gives primary stream, city, state, country, and courses list which has colleges. with optional city filter by id.
 *     parameters:
 *       - in: query
 *         name: searchquery
 *         schema:
 *           type: string
 *         description: Search colleges by name
 *       - in: query
 *         name: cityid
 *         schema:
 *           type: string
 *         description: Filter colleges by city id
 *       - in: query
 *         name: stateid
 *         schema:
 *           type: string
 *         description: Filter colleges by state id
 *       - in: query
 *         name: courseid
 *         schema:
 *           type: string
 *         description: Filter colleges by course id
 *       - in: query
 *         name: min_fees
 *         schema:
 *           type: number
 *         description: Minimum fees filter (in AUD)
 *       - in: query
 *         name: max_fees
 *         schema:
 *           type: number
 *         description: Maximum fees filter (in AUD)
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *         description: Page number for pagination
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *         description: Number of items per page
 *       - in: query
 *         name: sortBy
 *         schema:
 *           type: string
 *           enum: [score_desc, score_asc, rating_desc, rating_asc]
 *           default: score_desc
 *         description: Sort colleges by score or rating
 *       - in: query
 *         name: streamid
 *         schema:
 *           type: string
 *         description: Filter colleges by stream id
 *     responses:
 *       200:
 *         description: Successfully retrieved college list
 *       500:
 *         description: Internal server error
 */

export const getCollegeList = async (req: Request, res: Response) => {
  try {
    const {
      page = 1,
      limit = 10,
      searchquery,
      stateid,
      courseid,
      min_fees,
      max_fees,
      streamid,
      sortBy = "score_desc",
    } = req.query;

    // Calculate pagination
    const skip = (Number(page) - 1) * Number(limit);
    const take = Number(limit);

    // Build where clause with optional filters
    const whereClause: any = {};

    if (searchquery) {
      whereClause.college_name = {
        contains: String(searchquery),
        mode: "insensitive",
      };
    }

    if (stateid) {
      whereClause.state = {
        id: {
          equals: Number(stateid),
        },
      };
    }

    if (courseid) {
      whereClause.CollegesCourses = {
        some: {
          course_id: {
            equals: Number(courseid),
          },
        },
      };
    }

    if (streamid) {
      whereClause.streamId = {
        equals: Number(streamid),
      };
    }

    if (min_fees || max_fees) {
      whereClause.avg_fees_in_aud = {};
      if (min_fees) {
        whereClause.avg_fees_in_aud.gte = Number(min_fees);
      }
      if (max_fees) {
        whereClause.avg_fees_in_aud.lte = Number(max_fees);
      }
    }

    // Determine sort order
    let orderBy: any = { score: "desc" }; // default

    switch (sortBy) {
      case "score_asc":
        orderBy = { score: "asc" };
        break;
      case "score_desc":
        orderBy = { score: "desc" };
        break;
      case "rating_asc":
        orderBy = { rating: "asc" };
        break;
      case "rating_desc":
        orderBy = { rating: "desc" };
        break;
      default:
        orderBy = { score: "desc" };
    }

    // Fetch colleges and total count in parallel for efficiency
    const [colleges, totalColleges] = await Promise.all([
      prisma.colleges.findMany({
        where: whereClause,
        select: {
          id: true,
          slug: true,
          logo_url: true,
          college_name: true,
          location: true,
          rating: true,
          score: true,
          brochure_url: true,
          avg_fees_in_aud: true,
          city: { select: { name: true } },
          state: { select: { name: true } },
          CollegesCourses: { select: { id: true } },
        },
        orderBy,
        skip,
        take,
      }),
      prisma.colleges.count({ where: whereClause }),
    ]);

    // Transform data to include course_count and flatten city/state names
    const collegeList = colleges.map((college) => ({
      id: college.id,
      slug: college.slug,
      logo_url: college.logo_url,
      college_name: college.college_name,
      location: college.location,
      rating: college.rating,
      score: college.score,
      brochure_url: college.brochure_url,
      avg_fees_in_aud: college.avg_fees_in_aud,
      city_name: college.city.name,
      state_name: college.state.name,
      course_count: college.CollegesCourses.length,
    }));

    // Fetch filter options with both id and name, in parallel
    const [streams, states, courses] = await Promise.all([
      prisma.stream.findMany({
        where: { Colleges: { some: {} } },
        select: { id: true, name: true },
        orderBy: { name: "asc" },
      }),
      prisma.state.findMany({
        where: { Colleges: { some: {} } },
        select: { id: true, name: true },
        orderBy: { name: "asc" },
      }),
      prisma.courses.findMany({
        where: { CollegesCourses: { some: {} } },
        select: { id: true, course_name: true },
        orderBy: { course_name: "asc" },
      }),
    ]);

    // Transform filter data to include both id and name
    const streamOptions = streams.map((s) => ({ id: s.id, name: s.name }));
    const stateOptions = states.map((s) => ({ id: s.id, name: s.name }));
    const courseOptions = courses.map((c) => ({
      id: c.id,
      name: c.course_name,
    }));

    const response = {
      success: true,
      data: {
        colleges: collegeList,
        pagination: {
          currentPage: Number(page),
          totalPages: Math.ceil(totalColleges / Number(limit)),
          totalItems: totalColleges,
          itemsPerPage: Number(limit),
        },
        filters: {
          stream: streamOptions,
          state: stateOptions,
          courses: courseOptions,
        },
      },
    };

    res.status(200).json(response);
  } catch (error) {
    console.error("Error fetching college list:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: process.env.NODE_ENV === "development" ? error : undefined,
    });
  }
};
