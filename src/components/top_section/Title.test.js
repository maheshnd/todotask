import React from 'react';
import { shallow } from 'enzyme';
import Title from './Title';
describe('ToatalCount', () => {
  const title = shallow(<Title />);
  it(`renders the total count lable`, () => {
    expect(title.find('Row').text()).toEqual('Todo Task');
  });
});
