/* eslint-disable react-native/no-inline-styles */
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {colors} from '../colors';

import categories from '../constants/categories';

const Categories = () => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.categoriesListContainer}>
      {categories.map((category, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={0.8}
          onPress={() => setSelectedCategoryIndex(index)}>
          <View>
            <View
              style={{
                backgroundColor:
                  selectedCategoryIndex == index
                    ? colors.catColor
                    : colors.white,
                ...styles.categoryBtn,
                padding: 10,
              }}>
              <View style={styles.categoryBtnImgCon}>
                <Image
                  source={category.image}
                  style={{height: 35, width: 35, resizeMode: 'cover'}}
                />
              </View>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  marginTop: 6,
                  color:
                    selectedCategoryIndex == index ? colors.black : colors.grey,
                }}>
                {category.name}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default Categories;

const styles = StyleSheet.create({
  categoriesListContainer: {
    paddingVertical: 30,
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  categoryBtn: {
    height: 120,
    width: 100,
    marginRight: 7,
    borderRadius: 50,
    alignItems: 'center',
    paddingHorizontal: 5,
    flexDirection: 'column',
    justifyContent: 'center',
    borderColor: 'green',
    borderWidth: 1,
    padding: 5,
  },
  categoryBtnImgCon: {
    height: 35,
    width: 35,
    backgroundColor: colors.white,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
