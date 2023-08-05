import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import styles from './ProductRow.style';
import ProductCardView from './ProductCardView';
import useFetch from '../hook/useFetch';
import {colors} from '../colors';

const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 44,
  height,
  width,
};

const ProductRow = () => {
  const {data, isLoading, error} = useFetch();
  const product = [1, 2, 3, 4];
  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size={SIZES.xxLarge} color={colors.primary} />
      ) : error ? (
        <Text>Something went wrong</Text>
      ) : (
        <FlatList
          data={data}
          keyExtractor={item => item._id}
          renderItem={({item}) => <ProductCardView item={item} />}
          horizontal
          contentContainerStyle={{columnGap: SIZES.medium}}
        />
      )}
    </View>
  );
};

export default ProductRow;

const styles = StyleSheet.create({
  container: {marginTop: SIZES.medium, marginLeft: 12},
});
