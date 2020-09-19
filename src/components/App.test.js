import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  const app = shallow(<App />);

  it(`renders the Title`, () => {
    expect(app.find('Title').exists()).toBe(true);
  });

  it(`renders the SearchBar`, () => {
    expect(app.find('Connect(SearchBar)').exists()).toBe(true);
  });

  it(`renders the SearchBar`, () => {
    expect(app.find('Connect(List)').exists()).toBe(true);
  });

  it(`renders the TotalCount`, () => {
    expect(app.find('Connect(ToatalCount)').exists()).toBe(true);
  });
});
