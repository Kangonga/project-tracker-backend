import { Comment } from '@app/interfaces/comments.interface';
import { Schema, model } from 'mongoose';

const commentSchema = new Schema<Comment>({
  commenterId: { type: String, required: true },
  bugId: { type: String, required: true },
  content: { type: String, required: true },
  timestamps: { type: String, required: true },
});

const CommentModel = model<Comment>('Comments', commentSchema);

export default CommentModel;
