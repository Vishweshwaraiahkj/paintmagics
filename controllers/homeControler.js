const HomeController = (req, res) => {
  const message = "Welcome to the paint magics!";
  res.json(message);
};

const ApiController = (req, res) => {
  const message = "Welcome to the paint magics API!";
  res.json(message);
};

module.exports = {
  HomeController,
  ApiController
};
