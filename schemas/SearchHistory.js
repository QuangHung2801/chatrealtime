const mongoose = require('mongoose');
const SearchHistorySchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
         required: true 
        },
    search_term: String,
    created_at: { 
        type: Date, 
        default: Date.now 
    }
});

module.exports = mongoose.model('SearchHistory', SearchHistorySchema);