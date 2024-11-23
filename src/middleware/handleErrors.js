module.exports = (err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
    console.error(err);
    return res.status(400).send({ status: 400, message: err.message });
  }
  console.error(err.stack);
  res.status(500).send({ error: err.message });
};
