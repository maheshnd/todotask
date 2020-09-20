import React from 'react';
import { connect } from 'react-redux';
import { Row, ListGroup, Col } from 'react-bootstrap';
import TaskList from './TaskList';
export const List = ({ tasks, currentTask }) => {
  return (
    <>
      <Row>
        <Col md={{ span: 5, offset: 4 }}>
          <ListGroup>
            {tasks.map((task) =>
              currentTask ? (
                task.taskName
                  .toUpperCase()
                  .includes(currentTask.toUpperCase()) && (
                  <TaskList key={task.id} task={task} />
                )
              ) : (
                <TaskList key={task.id} task={task} />
              )
            )}
          </ListGroup>
        </Col>
      </Row>
    </>
  );
};

const mapStateToProps = (store) => ({
  tasks: store.tasks.allTasks,
  currentTask: store.tasks.currentTask,
});

export default connect(mapStateToProps)(List);
