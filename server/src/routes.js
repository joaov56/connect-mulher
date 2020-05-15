import { Router } from "express";

import ReportController from "./app/controllers/ReportController";
import SearchController from "./app/controllers/SearchController";

const routes = Router();

const reports = [];

routes.use((req, res, next) => {
  req.reports = reports;

  return next();
});

routes.get("/reports", ReportController.index);

routes.post("/reports", ReportController.store);

routes.post("/analysed", ReportController.update);

routes.get("/search", SearchController.store);

export default routes;
