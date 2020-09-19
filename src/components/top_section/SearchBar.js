import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTask, addCurrentTask } from '../../action/taskAction';
import { Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap';

export const SearchBar = ({ addTask, addCurrentTask }) => {
  const [task, setTask] = useState();

  const updateFrom = (e) => {
    setTask(e.target.value);
    addCurrentTask(e.target.value);
  };
  const addNewTask = (e) => {
    e.preventDefault();
    const newTask = {
      id: Math.random(),
      taskName: task,
      isComplete: false,
    };
    task && addTask(newTask);
    setTask('');
  };

  return (
    <>
      <Row>
        <Col md={{ span: 5, offset: 4 }}>
          <InputGroup className='mb-3'>
            <FormControl
              placeholder='Add Task'
              size='lg'
              value={task}
              onChange={updateFrom}
              aria-label='add something'
              aria-describedby='basic-addon2'
            ></FormControl>
            <InputGroup.Append>
              <Button variant='dark' size='lg' onClick={addNewTask}>
                ADD
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </Col>
      </Row>
    </>
  );
};

export default connect(null, { addTask, addCurrentTask })(SearchBar);
