import React from 'react';
import {FlatList} from 'react-native';
import {API_PRODUCT_URL} from '@env';
import ProductCard from '../../components/ProductCard/ProductCard';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';

const Products = ({navigation}) => {
  const {loading, data, error} = useFetch(API_PRODUCT_URL);

  const handleProductSelect = id => {
    navigation.navigate('DetailPage', {id});
  };

  const renderProduct = ({item}) => (
    <ProductCard product={item} onSelect={() => handleProductSelect(item.id)} />
  );

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return <FlatList data={data.products} renderItem={renderProduct} />;
};

export default Products;
