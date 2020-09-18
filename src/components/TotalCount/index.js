import React from 'react';
import { connect } from 'react-redux';
import { Row, ListGroup, Button, Col, Badge } from 'react-bootstrap';
import { totalCompleteSelector, totalTaskSelector } from '../../selector/index';

const index = ({ totalComplete, totalTask }) => {
  return (
    <>
      <Row>
        <Col md={{ span: 5, offset: 4 }}>
          <ListGroup>
            <ListGroup.Item variant='dark' action>
              <Button variant='primary'>
                Total <Badge variant='light'>{totalTask}</Badge>
                <span className='sr-only'>unread messages</span>
              </Button>
              <Button variant='primary' className='totalCount'>
                Completed <Badge variant='light'>{totalComplete}</Badge>
                <span className='sr-only'>unread messages</span>
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </>
  );
};

const mapStateToProps = (store) => ({
  totalComplete: totalCompleteSelector(store),
  totalTask: totalTaskSelector(store),
});

export default connect(mapStateToProps)(index);
