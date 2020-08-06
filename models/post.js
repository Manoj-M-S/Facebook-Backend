var mongoose = require("mongoose");
var { ObjectId } = mongoose.Schema.Types;

var postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    postedBy: { type: Object, required: true },
    userId: { type: Object, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);
