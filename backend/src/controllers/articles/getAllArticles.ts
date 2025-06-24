import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";

/**
 * @swagger
 * /api/v1/articles/:
 *   get:
 *     tags:
 *       - Articles
 *     summary: Get all articles
 *     description: Retrieve all articles
 *     responses:
 *       200:
 *         description: Successfully retrieved all articles
 *       500:
 *         description: Internal server error
 *       400:
 *         description: Invalid article ID
 *       404:
 *         description: Article not found or no universities found in this article

 */

export const getAllArticles = async (req: Request, res: Response) => {
  try {
    const articles = await prisma.articles.findMany({
      select: { id: true, slug: true },
    });
    res.json({
      success: true,
      data: articles,
    });
  } catch (error) {
    console.error("Error fetching articles:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: process.env.NODE_ENV === "development" ? error : undefined,
    });
  }
};
