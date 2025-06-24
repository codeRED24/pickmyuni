import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";

/**
 * @swagger
 * /api/v1/city/:
 *   get:
 *     tags:
 *       - City
 *     summary: Get all cities
 *     description: Retrieve all cities
 *     responses:
 *       200:
 *         description: Successfully retrieved all cities
 *       500:
 *         description: Internal server error
 *       400:
 *         description: Invalid city ID
 *       404:
 *         description: City not found or no universities found in this city
 */

export const getAllCities = async (req: Request, res: Response) => {
  try {
    const cities = await prisma.city.findMany({
      select: {
        slug: true,
        id: true,
      },
    });
    return res.json({
      success: true,
      data: cities,
    });
  } catch (error) {
    console.error("Error fetching cities:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: process.env.NODE_ENV === "development" ? error : undefined,
    });
  }
};
