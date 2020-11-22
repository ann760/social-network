const { Schema, model } = require("mongoose");

const ThoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: "Field is Required",
    validate: [({ length }) => length >= 128, "Thought is too longer."],
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (createdAtVal) => dateFormat(createdAtVal),
  },
  userneame: {
    type: String,
    required: "Username is Required",
  },
  reactions: [ReactionSchema],
});
// create the User model using the UserSchema
const Thought = model("Thought", ThoughtSchema);

// export the User model
module.exports = Thought;
