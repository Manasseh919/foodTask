import React from 'react';
import styled from 'styled-components/native';
import {colors} from '../components/colors';

import Header from '../components/HomeScreen/Header';
import HomeText from '../components/HomeScreen/HomeText';
import Categories from '../components/HomeScreen/Categories';

const StyledView = styled.View`
  padding-top: 40px;
  background: ${colors.primary};
`;

const HomeScreen = () => {
  return (
    <StyledView>
      <Header />
      <HomeText />
      <Categories />
    </StyledView>
  );
};

export default HomeScreen;
