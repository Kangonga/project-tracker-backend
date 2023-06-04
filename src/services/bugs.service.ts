import { Bug } from '@app/interfaces/bugs.interface';
import BugModel from '@app/models/bugs.model';

export const findAllBugs = async () => {
  let error = false;
  const bugs = await BugModel.find();
  if (!bugs) {
    error = true;
  }
  return { error, bugs };
};

export const createOneBug = async (bug: Bug) => {
  const newbug = await BugModel.create(bug);
  if (!(newbug instanceof BugModel)) {
    throw Error('Bug was not created');
  }
  return { newbug };
};

export const findBugById = async (id: string) => {
  const bug = await BugModel.findOne({ _id: id });
  if (!bug) {
    throw Error('Bug not found');
  }
  return { bug };
};

export const findBug = async (field: string, value: string) => {
  const bug = await BugModel.findOne({ field: value });
  if (!bug) {
    throw Error('Bug not found');
  }
  return { bug };
};

export const updateSingleBug = async (bugID: string, bug: Bug) => {
  const filter = { _id: bugID };
  const updatedBug = await BugModel.findOneAndUpdate(filter, bug, {
    new: true,
    runValidators: true,
  });
  if (!updatedBug) {
    throw Error('Bug not found');
  }
  return { updatedBug };
};

export const deleteSingleBug = async (bugID: string) => {
  const filter = { _id: bugID };
  const deletedBug = await BugModel.findOneAndDelete(filter);
  if (!deletedBug) {
    throw Error('Bug not found');
  }
  return { deletedBug };
};
