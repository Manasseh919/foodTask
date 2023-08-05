import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const HomeText = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Enjoy Delicious food</Text>
    </View>
  );
};

export default HomeText;

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 30,
    width: '90%',
    paddingLeft: 20,
  },
});
