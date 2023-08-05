import axios from 'axios';

const apiKey = 'b53663382fmsh9354bdd3f391ea0p169b5ejsnb0fbd2d4a264';
const apiUrl =
  'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/products/search';

const fetchMenuItems = async (id: string | undefined) => {
  try {
    const response = await axios.get(`${apiUrl}${id}`, {
      headers: {
        'X-RapidAPI-Key': apiKey,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export default fetchMenuItems;
