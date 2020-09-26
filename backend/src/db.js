const Pool = require("pg").Pool;

const pool = new Pool({
  user: "akulbaiju",
  password: "25jan2001",
  host: "localhost",
  port: 5432,
  database: "postgres"
});

module.exports = pool;
