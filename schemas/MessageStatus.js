const mongoose = require('mongoose');
const MessageStatusSchema = new mongoose.Schema({
    message_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Message', required: true },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    is_read: { type: Boolean, default: false },
    is_delivered: { type: Boolean, default: false },
    read_at: Date,
    delivered_at: Date
});

module.exports = mongoose.model('MessageStatus', MessageStatusSchema);