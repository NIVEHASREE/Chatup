const mongoose = require('mongoose');
const ConversationSchema = new mongoose.Schema({
    members: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
    ],
    isgroup: {
        type: Boolean,
        default: false
    },
    groupname: {
        type: String,
        default: ""
    },
    lastMessage: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message",
        default: null
    }
}, {timestamps: true})
module.exports = mongoose.model('Conversation', ConversationSchema)