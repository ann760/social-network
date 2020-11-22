const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    username: {
      type: String,
      trim: true,
      required: "First Name is Required",
      Unique: yes,
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
        ref: "Comment",
      },
    ],
    friends: [],
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
  return this.email.slice(0, this.email.indexof("@"));
});

// create the User model using the UserSchema
const User = model("User", UserSchema);

// export the User model
module.exports = User;
