import React from 'react';
import { Container } from 'react-bootstrap';

import Title from './top_section/Title';
import SearchBar from './top_section/SearchBar';
import List from './task/List';
import TotalCount from './TotalCount';

const APP = () => {
  return (
    <Container fluid='md'>
      <Title />
      <hr />
      <SearchBar />
      <List />
      <TotalCount />
    </Container>
  );
};

export default APP;
