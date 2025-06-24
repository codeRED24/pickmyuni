import express from "express";
import { getRecentArticles } from "../../controllers/articles/recent";
import { getTopArticles } from "../../controllers/articles/topArticles";
import { getArticleById } from "../../controllers/articles/getArticleById";
import { getAllArticles } from "../../controllers/articles/getAllArticles";

const ArticleRouter = express.Router();

ArticleRouter.get("/recent", getRecentArticles as any);
ArticleRouter.get("/top", getTopArticles as any);
ArticleRouter.get("/:id", getArticleById as any);
ArticleRouter.get("/", getAllArticles as any);

export default ArticleRouter;
