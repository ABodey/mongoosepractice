const connect = require('../../lib/connect');
const url = 'mongodb://localhost:27019/pirates-test';
const mongoose = require('mongoose');

before(() => connect(url));
after(() => mongoose.connection.close());