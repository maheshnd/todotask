import React from 'react';
import { connect } from 'react-redux';
import { Row, ListGroup, Button, Col, Badge } from 'react-bootstrap';
import { totalCompleteSelector, totalTaskSelector } from '../../selector/index';

export const ToatalCount = ({ totalComplete, totalTask }) => {
  return (
    <>
      <Row>
        <Col md={{ span: 5, offset: 4 }}>
          <ListGroup>
            {totalTask > 0 && (
              <ListGroup.Item variant='dark' action>
                <Button variant='primary'>
                  Total <Badge variant='light'>{totalTask}</Badge>
                </Button>
                <Button variant='primary' className='totalCount'>
                  Completed <Badge variant='light'>{totalComplete}</Badge>
                </Button>
              </ListGroup.Item>
            )}
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

export default connect(mapStateToProps)(ToatalCount);
