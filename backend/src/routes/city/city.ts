import express from "express";
import { getCityById } from "../../controllers/city/getCity";
import { getTopCities } from "../../controllers/city/getTopCities";
import { getAllCities } from "../../controllers/city/getAllCities";

const CityRouter = express.Router();

CityRouter.get("/", getAllCities as any);
CityRouter.get("/top", getTopCities as any);
CityRouter.get("/:id", getCityById as any);

export default CityRouter;
