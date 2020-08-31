const lipsticks = [
  {
    id: 10,
    brand: "mac",
    type: "mate",
    color: "vermelho",
  },
  {
    id: 20,
    brand: "KDV",
    type: "metalico",
    color: "roxo",
  },
];

const getLipsticks = (req, res) => {
  res.send(JSON.stringify(lipsticks));
};

const getLipsticksById = (req, res) => {
  const id = parseInt(req.params.id);
  const index = lipsticks.findIndex((lipstick) => lipstick.id === id);
  const lipstick = lipsticks[index];

  res.send(lipstick);
};

const postLipsticks = (req, res) => {
  const newLipstick = req.body;

  lipsticks.push(newLipstick);

  res.send(JSON.stringify(newLipstick));
};

const deleteLipsticks = (req, res) => {
  const lipstickId = parseInt(req.params.id);
  const index = lipsticks.findIndex((lipstick) => lipstick.id === lipstickId);
  const lipstickOld = lipsticks[index];

  lipsticks.splice(index, 1);

  res.send(lipstickOld);
};

const putLipsticks = (req, res) => {
  const lipstickId = parseInt(req.params.id);
  const lipstickPayload = req.body;
  const lipIndex = lipsticks.findIndex(
    (lipstick) => lipstick.id === lipstickId
  );
  lipsticks.splice(lipIndex, 1, lipstickPayload);

  res.send(lipsticks);
}; //deveria retornar a lista com todos os itens ou apenas o alerado?

module.exports = {
  getLipsticks,
  getLipsticksById,
  postLipsticks,
  deleteLipsticks,
  putLipsticks,
};
