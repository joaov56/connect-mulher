import { uuid } from "uuidv4";

export default {
  index(req, res) {
    return res.json(req.reports);
  },
  store(req, res) {
    const {
      name,
      cpf,
      street,
      cep,
      city,
      complement,
      description,
      email,
      number,
      state,
    } = req.body;

    const { body } = req;
    console.log(body);

    const report = {
      user: {
        name,
        cpf,
        email,
        address: {
          cep,
          state,
          city,
          street,
          complement,
          number,
        },
      },
      complaint: {
        description,
      },
      analysed: false,
    };

    const { reports } = req;

    report.id = uuid();
    report.user.id = uuid();
    report.complaint.id = uuid();

    reports.push(report);

    return res.status(201).json({ report });
  },
  update(req, res) {
    const { reports } = req;
    const { report_id } = req.body;
    const reportIndex = reports.findIndex(report => report.id === report_id);

    reports[reportIndex].analysed = true;

    return res.json(reports[reportIndex]);
  },
};
