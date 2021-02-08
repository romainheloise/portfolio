class Images {
  static sendImage = (req, res) => {
    const { name } = req.params;
    res.sendFile("/images/" + name, { root: "./" });
  };
}

module.exports = Images;
