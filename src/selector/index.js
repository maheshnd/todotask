import { createSelector } from 'reselect';
const allTasksSelector = (store) => store.tasks.allTasks;

// export const allTaskSelector = createSelector(
//   tasksSelector,
//   (tasks) => tasks.allTasks
// );

export const totalCompleteSelector = createSelector(
  allTasksSelector,
  (tasks) => {
    return tasks.filter((task) => task.isComplete === true).length;
  }
);

export const totalTaskSelector = createSelector(allTasksSelector, (tasks) => {
  return tasks.length;
});
