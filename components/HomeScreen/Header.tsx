import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors} from '../colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Header = () => {
  return (
    <View style={styles.mainView}>
      <Icon name="menu" size={28} />
      <View>
        <TouchableOpacity
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>Delivery to</Text>
          <Icon name="keyboard-arrow-down" size={15} />
        </TouchableOpacity>
        <Text style={{color: colors.mainOrange}}>lekki phase 1, Estate</Text>
      </View>
      <Image
        source={{
          uri: 'https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg',
        }}
        style={{width: 48, height: 48, borderRadius: 30}}
      />
    </View>
  );
};

export default Header;
const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
    width: '90%',
    alignSelf: 'center',
  },
});
