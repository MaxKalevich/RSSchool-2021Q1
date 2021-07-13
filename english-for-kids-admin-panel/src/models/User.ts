// @ts-ignore
const { Schema, model } = require('mongoose');

// @ts-ignore
const User = new Schema({
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    roles: [{type: String, ref: 'Role'}]
})

module.exports = model('User', User);
