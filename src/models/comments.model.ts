import { Schema, model } from 'mongoose';

import { Comment } from '@app/features/commentsFeature/comments.interface';

const commentSchema = new Schema<Comment>({
  commenterId: { type: String, required: true },
  bugId: { type: String, required: true },
  content: { type: String, required: true },
  timestamps: { type: String, required: true },
});

const CommentModel = model<Comment>('Comments', commentSchema);

export default CommentModel;
