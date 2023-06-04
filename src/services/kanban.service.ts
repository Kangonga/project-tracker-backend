import { Kanban } from '@app/interfaces/kanban.interface';
import KanbanModel from '@app/models/kanban.model';

export const findAllKanbans = async () => {
  let error = false;
  const kanbans = await KanbanModel.find();
  if (!kanbans) {
    error = true;
  }
  return { error, kanbans };
};

export const createOneKanban = async (kanban: Kanban) => {
  const newkanban = await KanbanModel.create(kanban);
  if (!(newkanban instanceof KanbanModel)) {
    throw Error('Kanban was not created');
  }
  return { newkanban };
};

export const findKanbanById = async (id: string) => {
  const kanban = await KanbanModel.findOne({ _id: id });
  if (!kanban) {
    throw Error('Kanban not found');
  }
  return { kanban };
};

export const findKanban = async (field: string, value: string) => {
  const kanban = await KanbanModel.findOne({ field: value });
  if (!kanban) {
    throw Error('Kanban not found');
  }
  return { kanban };
};

export const updateSingleKanban = async (kanbanID: string, kanban: Kanban) => {
  const filter = { _id: kanbanID };
  const updatedKanban = await KanbanModel.findOneAndUpdate(filter, kanban, {
    new: true,
    runValidators: true,
  });
  if (!updatedKanban) {
    throw Error('Kanban not found');
  }
  return { updatedKanban };
};

export const deleteSingleKanban = async (kanbanID: string) => {
  const filter = { _id: kanbanID };
  const deletedKanban = await KanbanModel.findOneAndDelete(filter);
  if (!deletedKanban) {
    throw Error('Kanban not found');
  }
  return { deletedKanban };
};
