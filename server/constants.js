require('dotenv').config();
module.exports.cors = require('cors');
module.exports.path = require('path');
module.exports.pgp = require('pg-promise')();
module.exports.express = require('express');
module.exports.PORT = process.env.PORT || 5000;
module.exports.DBSSL = process.env.DBSSL === 'TRUE' || true;
module.exports.DATABASE_URL =
  process.env.DATABASE_URL + (module.exports.DBSSL ? '?ssl=true' : '');
