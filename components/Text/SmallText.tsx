import React, {FunctionComponent} from 'react';
import styled from 'styled-components/native';

import {TextProps} from './types';

const StyledText = styled.Text`
  font-size: 15px;
  color: gray;
  text-align: left;
  margin-left: 20px;
`;

const SmallText: FunctionComponent<TextProps> = props => {
  return (
    <StyledText numberOfLines={2} style={props.style}>
      {props?.children}
    </StyledText>
  );
};

export default SmallText;
