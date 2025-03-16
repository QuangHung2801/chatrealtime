const mongoose = require('mongoose');
const ReactionSchema = new mongoose.Schema({
    message_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Message', required: true },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    reaction_type: String,
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Reaction', ReactionSchema);