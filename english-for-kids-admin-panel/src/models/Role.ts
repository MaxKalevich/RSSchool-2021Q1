// @ts-ignore
const { Schema, model } = require('mongoose');

// @ts-ignore
const Role = new Schema({
    value: { type: String, unique: true, default: 'USER' },
})

module.exports = model('Role', Role);
