import React from 'react';
import { useDispatch } from 'react-redux';
import { ListGroup, Button, Badge } from 'react-bootstrap';
import { markTaskComplete, removeTask } from '../../action/taskAction';
const TaskList = ({ task: { taskName, isComplete, id } }) => {
  const dispatch = useDispatch();
  const markComplete = () => {
    dispatch(markTaskComplete(id));
  };
  const taskRemove = () => {
    dispatch(removeTask(id));
  };
  return (
    <>
      <ListGroup.Item variant='dark' action>
        {taskName}
        <Button
          className='completeButton'
          variant={isComplete ? 'success' : 'primary'}
          size='sm'
          onClick={markComplete}
        >
          {isComplete ? 'Completed' : 'Complete'}
        </Button>
        <Badge
          pill
          variant='dark'
          className='deleteButton'
          onClick={taskRemove}
        >
          -
        </Badge>
      </ListGroup.Item>
    </>
  );
};

export default TaskList;
