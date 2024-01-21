const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      min: 1,
      maxlength: 280,
    },
    // Add getter to format timestamp
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: String,
      required:true,
    },
      reactions: [
        {
          type: Schema.Types.ObjectId,
          ref: "reaction",
        },
      ],
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

thoughtSchema
  .virtual("reactionCount")
  // Getter
  .get(function () {
    return this.reactions.length;
  });


// Initialize our User model
const Thought = model("thought", thoughtSchema);

module.exports = Thought;

