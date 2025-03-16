const mongoose = require('mongoose');

const FriendSchema = new mongoose.Schema({
    user_id: {
         type: mongoose.Schema.Types.ObjectId, 
         ref: 'User', 
         required: true 
        },
    friend_id: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
         required: true
         },
    status: { 
        type: String, 
        enum: ['pending', 'accepted', 'blocked'],
         default: 'pending'
         },
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Friend', FriendSchema);