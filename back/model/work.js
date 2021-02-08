const { mysql } = require("../config/mysql");

class Work {
  static getAll = async () => {
    const sql = "SELECT * FROM work";
    const [result] = await mysql.query(sql).catch((err) => err.message);
    return result;
  };
}

module.exports = Work;
