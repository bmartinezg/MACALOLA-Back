const express = require('express');
const app = express();

app.use(require('./user/user'))
app.use(require('./user/login'))
app.use(require('./user/emailSuscription'))
app.use(require('./user/resetPassword'))
app.use(require('./category/category'))

module.exports = app