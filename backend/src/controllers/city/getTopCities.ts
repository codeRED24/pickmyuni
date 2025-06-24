import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";

/**
 * @swagger
 * /api/v1/city/top:
 *   get:
 *     tags:
 *       - City
 *     summary: Get top cities with pagination
 *     description: Retrieve a paginated list of top cities. Results are sorted by score in descending order.
 *     parameters:
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
 *     responses:
 *       200:
 *         description: Successfully retrieved universities in the city
 *       404:
 *         description: City not found or no universities found in this city
 *       400:
 *         description: Invalid city ID
 *       500:
 *         description: Internal server error
 */
export const getTopCities = async (req: Request, res: Response) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const skip = (Number(page) - 1) * Number(limit);
    const take = Number(limit);

    const [cities, totalCities] = await Promise.all([
      prisma.city.findMany({
        orderBy: {
          score: "desc",
        },
        skip,
        take,
      }),
      prisma.city.count(),
    ]);

    res.json({
      success: true,
      data: {
        cities,
        totalCities,
        pagination: {
          currentPage: Number(page),
          totalPages: Math.ceil(totalCities / Number(limit)),
          totalItems: totalCities,
          itemsPerPage: Number(limit),
        },
      },
    });
  } catch (error) {
    console.error("Error fetching universities in city:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: process.env.NODE_ENV === "development" ? error : undefined,
    });
  }
};
