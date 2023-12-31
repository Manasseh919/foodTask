import React, {FunctionComponent} from 'react';
import styled from 'styled-components/native';
import {colors} from '../colors';
import {ContainerProps} from './types';

const StyledView = styled.View`
  flex: 1;
  padding: 25px;
  padding-top: 40px;
  background: ${colors.primary};
`;

const MainContainer: FunctionComponent<ContainerProps> = props => {
  return <StyledView style={props.style}>{props.children}</StyledView>;
};

export default MainContainer;
