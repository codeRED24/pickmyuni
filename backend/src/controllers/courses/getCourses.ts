import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";

/**
 * @swagger
 * /api/v1/courses/:
 *   get:
 *     tags:
 *       - Courses
 *     summary: Get all courses
 *     description: Retrieve all courses
 *     responses:
 *       200:
 *         description: Successfully retrieved all courses
 *       500:
 *         description: Internal server error
 */
export const getAllCourses = async (req: Request, res: Response) => {
  try {
    const courses = await prisma.courses.findMany({
      select: { id: true, course_name: true },
    });
    res.json({
      success: true,
      data: courses,
    });
  } catch (error) {
    console.error("Error fetching courses:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: process.env.NODE_ENV === "development" ? error : undefined,
    });
  }
};
