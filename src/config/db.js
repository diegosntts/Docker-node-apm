const { Pool } = require('pg');

module.exports = new Pool({
  user: 'postgres',
  password: 'password',
  host: '172.22.238.30',
  port: 5432,
  database: 'launchstore'
});
