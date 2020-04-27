export default {
  index(req, res) {
    return res.json(req.reports);
  },
};
