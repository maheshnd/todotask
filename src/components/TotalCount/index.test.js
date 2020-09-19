import React from 'react';
import { shallow } from 'enzyme';
import { ToatalCount } from './index';

describe('ToatalCount', () => {
  const props = {
    totalComplete: '2',
    totalTask: '3',
  };
  const toatalCount = shallow(<ToatalCount {...props} />);

  it(`renders the total count lable`, () => {
    expect(toatalCount.find('Button').at(0).props().children[0]).toEqual(
      'Total '
    );
  });

  it(`renders the total complted lable`, () => {
    expect(toatalCount.find('Button').at(1).props().children[0]).toEqual(
      'Completed '
    );
  });

  it(`renders the total count value`, () => {
    expect(toatalCount.find('Badge').at(0).text()).toEqual(props.totalTask);
  });

  it(`renders the total count value`, () => {
    expect(toatalCount.find('Badge').at(1).text()).toEqual(props.totalComplete);
  });
});
