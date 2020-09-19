import {
  addTask,
  addCurrentTask,
  removeTask,
  markTaskComplete,
} from './taskAction';
import {
  ADD_TASK,
  CURRENT_TASK,
  REMOVE_TASK,
  MARKCOMPLETED_TASK,
} from './type';
import { payload } from '../data/fixtures';

describe('actions', () => {
  it('creates an action to add task', () => {
    const expectedAction = { type: ADD_TASK, payload };

    expect(addTask(payload)).toEqual(expectedAction);
  });

  it('creates an action to current task', () => {
    const expectedAction = { type: CURRENT_TASK, payload: 'Buy Milk' };

    expect(addCurrentTask('Buy Milk')).toEqual(expectedAction);
  });

  it('creates an action to remove task ', () => {
    const expectedAction = { type: REMOVE_TASK, payload: '2' };

    expect(removeTask('2')).toEqual(expectedAction);
  });

  it('creates an action to markTaskComplete task completed', () => {
    const expectedAction = { type: MARKCOMPLETED_TASK, payload: '2' };

    expect(markTaskComplete('2')).toEqual(expectedAction);
  });
});
