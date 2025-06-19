import express from "express";
import { getCityById } from "../../controllers/city/getCity";

const CityRouter = express.Router();

CityRouter.get("/:id", getCityById as any);

export default CityRouter;
