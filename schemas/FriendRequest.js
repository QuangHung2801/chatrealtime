const mongoose = require('mongoose');
const FriendRequestSchema = new mongoose.Schema({
    sender_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    receiver_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    status: { type: String, enum: ['pending', 'accepted', 'declined'], default: 'pending' },
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('FriendRequest', FriendRequestSchema);