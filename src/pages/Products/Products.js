import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import Config from 'react-native-config';

const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fectData();
  }, []);

  const fectData = async () => {
    const {data: productData} = await axios.get(Config.API_URL);
    setData(productData);
  };
  const renderProduct = ({item}) => {
    <Text>{item.title}</Text>;
  };

  return (
    <View>
      <View>
        <FlatList data={data} renderItem={renderProduct} />
        <Text>DENEME</Text>
      </View>
    </View>
  );
};

export default Products;
