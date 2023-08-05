import React from 'react';
import MainContainer from './components/Container/MainContainer';
import BigText from './components/Text/BigText';
import SmallText from './components/Text/SmallText';
import RegularText from './components/Text/RegularText';

export default function App() {
  return (
    <MainContainer>
      <BigText>App</BigText>
      <SmallText>App</SmallText>
      <RegularText>App</RegularText>
    </MainContainer>
  );
}
