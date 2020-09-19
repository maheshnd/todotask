import React from 'react';
import { shallow } from 'enzyme';
import { SearchBar } from './SearchBar';

const taskname = 'buy milk';

describe('SearchBar', () => {
  const addCurrentTask = jest.fn(() => {
    return { type: 'CURRENT_TASK', payload: taskname };
  });
  const searchBar = shallow(<SearchBar {...addCurrentTask} />);
  console.log(searchBar.debug());

  it(`renders the input box`, () => {
    expect(searchBar.find('FormControl').exists()).toBe(true);
  });

  it(`renders the Add task button`, () => {
    expect(searchBar.find('Button').text()).toEqual('ADD');
  });

  // describe('and enterning the values in input box', () => {
  //   beforeEach(() => {
  //     searchBar
  //       .find('FormControl')
  //       .simulate('change', { target: { value: taskname } });
  //   });

  //   it('updates the task  in the state', () => {
  //     console.log(searchBar.find('FormControl').props().children);
  //     //expect(searchBar.find('FormControl').props().ch)
  //   });
  // });
});
