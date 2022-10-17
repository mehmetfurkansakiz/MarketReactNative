import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './ProductCard.style';

const ProductCard = ({product}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: product.thumbnail}} />
      <View style={styles.body_container}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.description}>{product.description}</Text>
        <Text style={styles.price}>{product.price} $</Text>
      </View>
    </View>
  );
};

export default ProductCard;

// id	1
// title	"iPhone 9"
// description	"An apple mobile which is nothing like apple"
// price	549
// discountPercentage	12.96
// rating	4.69
// stock	94
// brand	"Apple"
// category	"smartphones"
// thumbnail	"https://dummyjson.com/image/i/products/1/thumbnail.jpg"
// images
// 0	"https://dummyjson.com/image/i/products/1/1.jpg"
// 1	"https://dummyjson.com/image/i/products/1/2.jpg"
// 2	"https://dummyjson.com/image/i/products/1/3.jpg"
// 3	"https://dummyjson.com/image/i/products/1/4.jpg"
// 4	"https://dummyjson.com/image/i/products/1/thumbnail.jpg"
