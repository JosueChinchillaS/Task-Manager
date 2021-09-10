'use strict';

const mongoose = require('mongoose');

const taskScheme = new mongoose.Schema({
    name: { type: String, required: true, unique: false },
    date: { type: String, required: true, unique: false },
    owner: { type: String, required: true, unique: false },
    priority: { type: String, required: true, unique: false },
    description: { type: String, required: true, unique: false }
});

module.exports = mongoose.model('Task', taskScheme, 'tasks');