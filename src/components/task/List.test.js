import React from 'react';
import { shallow } from 'enzyme';
import { List } from './List';

describe('List', () => {
  const props = {
    tasks: [
      {
        id: 0.10295328919778801,
        taskName: 'Need deatils',
        isComplete: true,
      },
    ],
  };

  const list = shallow(<List {...props} />);

  it('renders the task list ', () => {
    expect(list.find('TaskList').length).toEqual(props.tasks.length);
  });
});
