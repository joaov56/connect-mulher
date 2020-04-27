export default {
  store(req, res) {
    const { cpf } = req.body;
    const { reports } = req;
    const reportExists = reports.find(report => report.cpf === cpf);

    if (!reportExists) {
      return res.status(404).json({ message: "Denuncia não encontrada!" });
    }

    return res.send(true);
  },
};
