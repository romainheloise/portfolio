const model = require("../model/work");

class Work {
  static getAll = async (req, res) => {
    const workData = await model.getAll();
    res.status(200).json(workData);
  };
}

module.exports = Work;
