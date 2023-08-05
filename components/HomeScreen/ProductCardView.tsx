/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  Dimensions,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import axios, {AxiosResponse} from 'axios';
import {colors} from '../colors';
const {width} = Dimensions.get('screen');
const cardWidth = width / 2 - 20;
import Icon from 'react-native-vector-icons/MaterialIcons';

interface MenuItem {
  id: number;
  name: string;
  price: number;
  title: string;
  image: string;
  description: string;
  // Add other properties as needed
}

const options = {
  method: 'GET',
  url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/products/22347',
  headers: {
    'X-RapidAPI-Key': 'b53663382fmsh9354bdd3f391ea0p169b5ejsnb0fbd2d4a264',
    'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
  },
};

const ProductCardView: React.FC = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  useEffect(() => {
    axios
      .request(options)
      .then(function (response: AxiosResponse<MenuItem>) {
        setMenuItems([response.data]);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 20,
        }}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>
          Porpular restaurants
        </Text>
        <TouchableOpacity
          style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{color: colors.mainOrange, textDecorationLine: true}}>
            View all (20)
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView horizontal style={{marginLeft: 20}}>
        <FlatList
          data={menuItems}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <TouchableOpacity
              style={{
                height: 250,
                width: cardWidth,
                marginHorizontal: 10,
                marginBottom: 20,
                marginTop: 50,
                borderRadius: 15,
                elevation: 13,
                backgroundColor: colors.white,
              }}>
              <View style={{alignItems: 'center'}}>
                <Image
                  style={{height: 120, width: 120}}
                  source={{uri: item.image}}
                />
              </View>

              <Text
                numberOfLines={1}
                style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  paddingHorizontal: 10,
                }}>
                {item.title}
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  paddingHorizontal: 10,
                  marginVertical: 5,
                }}>
                ${item.price}
              </Text>
              <Text
                numberOfLines={2}
                style={{
                  paddingHorizontal: 10,
                }}>
                ${item.description}
              </Text>
              {/* Render other item properties as needed */}
              <View
                style={{
                  paddingHorizontal: 10,
                  marginVertical: 10,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Icon name="star" color={'gold'} size={20} />
                  <Text>4+</Text>
                </View>
                <Icon name="favorite" size={25} color={'red'} />
              </View>
            </TouchableOpacity>
          )}
        />
      </ScrollView>
    </View>
  );
};

export default ProductCardView;
