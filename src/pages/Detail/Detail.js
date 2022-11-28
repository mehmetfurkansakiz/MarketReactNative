import React from 'react';
import {View, Text, Image} from 'react-native';
import useFetch from '../../hooks/useFetch';
import {API_PRODUCT_URL} from '@env';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';
import styles from './Detail.style';

const Detail = ({route}) => {
  const {id} = route.params;
  const {loading, data, error} = useFetch(`${API_PRODUCT_URL}/${id}`);
  console.log(id);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }
  return (
    <View style={styles.container}>
      <Image source={{uri: data.thumbnail}} style={styles.image} />
      <View style={styles.body_container}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.desc}>{data.description}</Text>
        <Text style={styles.price}>{data.price} $</Text>
      </View>
    </View>
  );
};

export default Detail;
