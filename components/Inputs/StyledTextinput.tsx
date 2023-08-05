/* eslint-disable react-native/no-inline-styles */
import React, {FunctionComponent, useState} from 'react';
import styled from 'styled-components/native';
import {InputProps} from './types';
import SmallText from '../Text/SmallText';
import {colors} from '../colors';

const InputWrapper = styled.View`
  width: 100%;
`;

const InputField = styled.TextInput`
  background-color: white;
  height: 50px;
  border-width: 2px;
  border-radius: 15px;
  border-color: ${colors.gray1};
  margin-top: 3px;
  margin-bottom: 3px;
  padding: 15px;
  padding-left: 20px;
  font-size: 14px;
`;

const StyledTextInput: FunctionComponent<InputProps> = ({label, ...props}) => {
  const [inputBackgroundColor, setInputBackgroundColor] = useState(
    colors.white,
  );

  const customOnFocus = () => {
    props?.onFocus;
    setInputBackgroundColor(colors.gray1);
  };
  const customOnBlur = () => {
    props?.onBlur;
    setInputBackgroundColor(colors.white);
  };
  return (
    <InputWrapper>
      <SmallText style={{marginLeft: 20, marginBottom: 5, color: '#232B2B'}}>
        {label}
      </SmallText>
      <InputField
        {...props}
        placeholderTextColor={colors.gray1}
        style={[{backgroundColor: inputBackgroundColor}, props.style]}
        onFocus={customOnFocus}
        onBlur={customOnBlur}
      />
    </InputWrapper>
  );
};

export default StyledTextInput;
