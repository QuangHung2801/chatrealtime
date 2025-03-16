const mongoose = require('mongoose');
const AttachmentSchema = new mongoose.Schema({
    message_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Message', required: true },
    file_url: String,
    file_type: { type: String, enum: ['image', 'video', 'file', 'audio'], required: true },
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Attachment', AttachmentSchema)