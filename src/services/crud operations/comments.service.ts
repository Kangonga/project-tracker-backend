import { Comment } from '@app/interfaces/comments.interface';
import CommentModel from '@app/models/comments.model';

export const findAllComments = async () => {
  let error = false;
  const comments = await CommentModel.find();
  if (!comments) {
    error = true;
  }
  return { error, comments };
};

export const createOneComment = async (comment: Comment) => {
  const newcomment = await CommentModel.create(comment);
  if (!(newcomment instanceof CommentModel)) {
    throw Error('Comment was not created');
  }
  return { newcomment };
};

export const findCommentById = async (id: string) => {
  const comment = await CommentModel.findOne({ _id: id });
  if (!comment) {
    throw Error('Comment not found');
  }
  return { comment };
};

export const findComment = async (field: string, value: string) => {
  const comment = await CommentModel.findOne({ field: value });
  if (!comment) {
    throw Error('Comment not found');
  }
  return { comment };
};

export const updateSingleComment = async (commentID: string, comment: Comment) => {
  const filter = { _id: commentID };
  const updatedComment = await CommentModel.findOneAndUpdate(filter, comment, {
    new: true,
    runValidators: true,
  });
  if (!updatedComment) {
    throw Error('Comment not found');
  }
  return { updatedComment };
};

export const deleteSingleComment = async (commentID: string) => {
  const filter = { _id: commentID };
  const deletedComment = await CommentModel.findOneAndDelete(filter);
  if (!deletedComment) {
    throw Error('Comment not found');
  }
  return { deletedComment };
};
