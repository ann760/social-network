const { Schema, model } = require("mongoose");

const dateFormat = require("../utils/dateFormat");

const ReactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: "Field is Required",
      maxlength: 280,
    },
    username: {
      type: String,
      required: "Field is Required",
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

const ThoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: "Field is Required",
      minlength: 1,
      maxlength: 208,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => dateFormat(createdAtVal),
    },
    username: {
      type: String,
      required: "Field is Required",
    },
    user: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    reactions: [ReactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);
ThoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

// create the User model using the UserSchema
const Thought = model("Thought", ThoughtSchema);

// export the User model
module.exports = Thought;
