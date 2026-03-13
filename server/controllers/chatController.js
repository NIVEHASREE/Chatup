const Conversation = require('../models/Conversation');
const User = require('../models/User');

const getChat = async (req, res) => {
    const userId = req.user.id;

    try {
        const conversations = await Conversation.find({ members: userId })
            .populate('members', 'username profilePicture isOffline')
            .sort({ 'lastMessage.createdAt': -1 })
            .lean(); // convert to plain objects

        // Add sender info to lastMessage
        for (let conv of conversations) {
            if (conv.lastMessage && conv.lastMessage.senderId) {
                const sender = await User.findById(conv.lastMessage.senderId)
                    .select('username profilePicture');
                conv.lastMessage.sender = sender;
            }
        }

        res.json(conversations);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { getChat };