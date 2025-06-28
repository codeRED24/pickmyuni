import express from "express";
import { getAllCourses } from "../../controllers/courses/getCourses";

const CoursesRouter = express.Router();

CoursesRouter.get("/", getAllCourses as any);

export default CoursesRouter;
