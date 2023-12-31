import React, {FunctionComponent} from 'react';
import styled from 'styled-components/native';
import {colors} from '../colors';
import {TextProps} from './types';

const StyledText = styled.Text`
  font-size: 30px;
  color: ${colors.black};
  text-align: left;
  font-weight: bold;
  margin-left: 20px;
`;

const BigText: FunctionComponent<TextProps> = props => {
  return <StyledText style={props.style}>{props?.children}</StyledText>;
};

export default BigText;
