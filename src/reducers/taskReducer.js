import {
  ADD_TASK,
  CURRENT_TASK,
  MARKCOMPLETED_TASK,
  REMOVE_TASK,
} from '../action/type';
const initialState = {
  currentTask: null,
  allTasks: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        currentTask: '',
        allTasks: [action.payload, ...state.allTasks],
      };
    case REMOVE_TASK:
      return {
        ...state,
        allTasks: state.allTasks.filter((task) => task.id !== action.payload),
      };
    case CURRENT_TASK:
      return {
        ...state,
        currentTask: action.payload,
      };
    case MARKCOMPLETED_TASK:
      const updateTask = [...state.allTasks].filter((task) => {
        if (task.id === action.payload) {
          task.isComplete = true;
        }
        return task;
      });

      console.log('updateTask', updateTask);
      return {
        ...state,
        allTasks: [...updateTask],
      };
    default:
      return state;
  }
};
