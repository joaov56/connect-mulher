export default {
  index(req, res) {
    return res.json(req.reports);
  },
  store(req, res) {
    const { user } = req.body;
    const { reports } = req;

    user.id = Math.random().toFixed(2);
    user.complaint.id = Math.random().toFixed(2);

    reports.push(user);

    return res.status(201).json({ user });
  },
};
