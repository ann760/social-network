const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    username: {
      type: String,
      trim: true,
      required: "Field is Required",
      Unique: true,
    },
    email: {
      type: String,
      Unique: true,
      Required: "Field required",
      match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
    },

    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],
    friends: [
        {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
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
    return this.friends.length;
});

// create the User model using the UserSchema
const User = model("User", UserSchema);

// export the User model
module.exports = User;
