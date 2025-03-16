const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: { 
        type: String,
        required: true,
        unique: true 
    },
    email: {
         type: String,
          required: true,
           unique: true
         },
    password_hash: { 
        type: String,
         required: true 
        },

    profile_picture_url: String,

    status: { 
        type: String,
        enum: ['online', 'offline'], 
        default: 'offline' 
        },
    is_verified: { 
        type: Boolean,
         default: false 
        },
    verification_token: String,
    reset_password_token: String,
    phone_number: String,
    
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', UserSchema);