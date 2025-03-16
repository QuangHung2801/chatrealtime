const mongoose = require('mongoose');
const CallSchema = new mongoose.Schema({
    caller_id: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true },
    receiver_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    call_type: { type: String, enum: ['video', 'voice'], required: true },
    call_status: { type: String, enum: ['missed', 'ended', 'ongoing'], required: true },
    started_at: Date,
    ended_at: Date
});

module.exports = mongoose.model('Call', CallSchema);