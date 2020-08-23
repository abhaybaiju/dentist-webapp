const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "Shambhavi",
  host: "localhost",
  port: 5432,
  database: "dental"
});

module.exports = pool;
