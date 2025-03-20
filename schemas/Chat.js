const mongoose = require("mongoose");

const ChatSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    auto: true,
  },
  name: {
    type: String,
    required: function () {
      return this.is_group;
    },
  },
  is_group: {
    type: Boolean,
    default: false,
  },
  admin_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: function () {
      return this.is_group;
    },
  },
  members: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  pinned_message_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Message",
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Chat", ChatSchema);