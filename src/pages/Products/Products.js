import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {SafeAreaView, FlatList, ActivityIndicator, Text} from 'react-native';
import {API_URL} from '@env';
import ProductCard from '../../components/ProductCard/ProductCard';

const Products = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState([true]);
  const [error, setError] = useState([null]);

  useEffect(() => {
    fectData();
  }, []);

  const fectData = async () => {
    try {
      const {data: productData} = await axios.get(API_URL);
      setData(productData.products);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  };

  const renderProduct = ({item}) => <ProductCard product={item} />;

  if (loading) {
    return <ActivityIndicator size={'large'} />;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <SafeAreaView>
      <FlatList data={data} renderItem={renderProduct} />
    </SafeAreaView>
  );
};

export default Products;
