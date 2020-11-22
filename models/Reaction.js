const { Schema, model } = require("mongoose");

const ReactiontSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: "Field is Required",
    },
    username: {
      type: String,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => dateFormat(createdAtVal),
    },
  },
  {
    toJSON: {
      getters: true,
    }
  }
);
// create the User model using the UserSchema
const Reaction = model("Reaction", ReactiontSchema);

// export the User model
module.exports = Reaction;
