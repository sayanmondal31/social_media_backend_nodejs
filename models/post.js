const { Schema, model } = require("mongoose");

const PostSchema = new Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = model("Post", PostSchema);
