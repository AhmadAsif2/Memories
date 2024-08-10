import mongoose from 'mongoose';

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    creator: {
      type: String,
      required: true,
    },
    tags: [String],
    selectedFile: String,
    likeCount: {
      type: Number,
      default: 0,
    },
    createdAt: {
      type: Date,
      default: Date.now, // It's a bit cleaner to use Date.now instead of `new Date()`
    },
  },
  { timestamps: true }
); // Adds `createdAt` and `updatedAt` fields automatically

const PostMessage = mongoose.model('PostMessage', postSchema); // Use PascalCase for model name

export default PostMessage;
