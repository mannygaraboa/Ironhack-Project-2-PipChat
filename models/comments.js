const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const commentSchema = new Schema({
  comment: String,
  userId: {type: Schema.Types.ObjectId, ref: "User"},
  yours: Boolean,
  date: Number
}, 
{
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
