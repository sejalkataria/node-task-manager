const mongoose = require('mongoose')
const validator = require('validator')
const User = require('./user')

const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    }
}, {
    timestamps: true,
    // toJSON: { virtuals: true },
    // toObject: { virtuals: true }
})
const Task = mongoose.model('Task', taskSchema, 'Task')

module.exports = Task