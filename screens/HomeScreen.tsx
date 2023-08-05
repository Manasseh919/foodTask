import React from 'react';
import styled from 'styled-components/native';
import {colors} from '../components/colors';

import Header from '../components/HomeScreen/Header';

const StyledView = styled.View`
  padding-top: 40px;
  background: ${colors.primary};
`;

const HomeScreen = () => {
  return (
    <StyledView>
      <Header />
    </StyledView>
  );
};

export default HomeScreen;
