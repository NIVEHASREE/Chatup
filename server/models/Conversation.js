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
    text: String,
    senderId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    seen: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now }
  },
  unreadCounts: [
    {
      userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      count: { type: Number, default: 0 }
    }
  ]
}, { timestamps: true })
module.exports = mongoose.model('Conversation', ConversationSchema)