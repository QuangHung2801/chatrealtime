const mongoose = require("mongoose");

const GroupParticipantSchema = new mongoose.Schema({
  chat_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Chat",
    required: true,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  joined_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("GroupParticipant", GroupParticipantSchema);
