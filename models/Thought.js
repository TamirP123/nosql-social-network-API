const { Schema, model } = require('mongoose');
const dayjs = require('dayjs');
const reactionSchema = require('./Reaction');

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
      get: formatDate,
    },
    username: {
      type: String,
      required:true,
    },
      reactions: [
        reactionSchema
      ],
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

function formatDate(createdAt) {
  return dayjs(createdAt).format("MM/DD/YYYY hh:mm:ss a")
}

thoughtSchema
  .virtual("reactionCount")
  // Getter
  .get(function () {
    return this.reactions.length;
  });


// Initialize our User model
const Thought = model("thought", thoughtSchema);

module.exports = Thought;

