import rootReducer from './index';
import {
  addTask,
  addCurrentTask,
  removeTask,
  markTaskComplete,
} from '../action/taskAction';

import {
  ADD_TASK,
  CURRENT_TASK,
  MARKCOMPLETED_TASK,
  REMOVE_TASK,
} from '../action/type';
import { payload, initialState, payloada } from '../data/fixtures';

describe('reducer', () => {
  it('update task in store', () => {
    const tasks = {
      allTasks: [{ ...payload }],
      currentTask: '',
    };
    expect(rootReducer({}, { type: ADD_TASK, payload })).toEqual({ tasks });
  });

  it('remove task from store', () => {
    const tasks = {
      allTasks: [],
      currentTask: null,
    };
    rootReducer({}, { type: ADD_TASK, payload });
    expect(
      rootReducer({}, { type: REMOVE_TASK, payload: payload.id })
    ).toEqual({ tasks });
  });

  it('update current task in store', () => {
    const tasks = {
      allTasks: [],
      currentTask: 'Buy Milk',
    };
    expect(
      rootReducer({}, { type: CURRENT_TASK, payload: tasks.currentTask })
    ).toEqual({ tasks });
  });
});
