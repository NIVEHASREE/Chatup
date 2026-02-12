const mongoose = require('mongoose');
const ConversationSchema = new mongoose.Schema({
    members: {
        type: Array,
        required: true
    },
    isgroup: {
        type: Boolean,
        default: false
    },
    groupname: {
        type: String,
        default: ""
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})
module.exports = mongoose.model('Conversation', ConversationSchema)