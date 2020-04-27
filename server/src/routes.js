import { Router } from "express";

import ReportController from "./app/controllers/ReportController";

const routes = Router();

const reports = [];

routes.use((req, res, next) => {
  req.reports = reports;

  return next();
});

routes.get("/reports", ReportController.index);

routes.post("/reports", (req, res) => {
  const { user } = req.body;

  user.id = Math.random().toFixed(2);
  user.complaint.id = Math.random().toFixed(2);

  reports.push(user);

  return res.status(201).json({ user });
});

routes.get("/search", (req, res) => {
  const { cpf } = req.body;

  const reportExists = reports.find(report => report.cpf === cpf);

  if (!reportExists) {
    return res.status(404).json({ message: "Denuncia não encontrada!" });
  }

  return res.send(true);
});

export default routes;
