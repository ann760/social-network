const { Schema, model } = require("mongoose");

const ReactionSchema = new Schema(
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
},
{
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  }

);
ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
  });

// create the User model using the UserSchema
const Thought = model("Thought", ThoughtSchema);

// export the User model
module.exports = Thought;
