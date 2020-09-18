import {
  ADD_TASK,
  CURRENT_TASK,
  MARKCOMPLETED_TASK,
  REMOVE_TASK,
} from './type';

export const addTask = (task) => {
  return {
    type: ADD_TASK,
    payload: task,
  };
};

export const addCurrentTask = (task) => {
  return {
    type: CURRENT_TASK,
    payload: task,
  };
};

export const removeTask = (task) => {
  return {
    type: REMOVE_TASK,
    payload: task,
  };
};

export const markTaskComplete = (taskId) => {
  return {
    type: MARKCOMPLETED_TASK,
    payload: taskId,
  };
};
