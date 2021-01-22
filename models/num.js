const mongoose = require('mongoose');

const numSchema = new mongoose.Schema({
    number: Number
});
const num = mongoose.model('num', numSchema);

module.exports = num;