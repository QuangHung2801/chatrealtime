const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
    chat_id: {
         type: mongoose.Schema.Types.ObjectId,
          ref: 'Chat', required: true 
        },
    sender_id: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
        required: true
        },
    message_content: String,
    message_type: { 
        type: String, 
        enum: ['text', 'image', 'file', 'video', 'audio'], 
        required: true 
    },
    is_pinned: { 
        type: Boolean, 
        default: false 
    },
    created_at: { 
        type: Date, 
        default: Date.now 
    }
});
module.exports = mongoose.model('Message', MessageSchema);