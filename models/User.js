const { Schema, model } = require("mongoose");

const FriendSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    username: {
      type: String,
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const UserSchema = new Schema(
  {
    username: {
      type: String,
      trim: true,
      required: "First Name is Required",
      Unique: true,
    },
    email: {
      type: String,
      Unique: true,
      Required: "Email is required",
      match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
    },

    thought: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],
    friends: [FriendSchema],
  },

  // Set the schema option to use virtuals 'id' as false
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

// get total count of friends on retrieval
UserSchema.virtual("friendCount").get(function () {
  return this.thought.reduce(
    (total, thought) => total + thought.reaction.length + 1,
    0
  );
});

// create the User model using the UserSchema
const User = model("User", UserSchema);

// export the User model
module.exports = User;
