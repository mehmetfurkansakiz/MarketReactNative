import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  body_container: {
    padding: 10,
  },
  image: {
    width: deviceSize.width,
    height: deviceSize.height / 3,
    resizeMode: 'contain',
    backgroundColor: 'white',
  },
  title: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 25,
  },
  desc: {
    fontStyle: 'italic',
    fontSize: 20,
    marginVertical: 5,
  },
  price: {
    fontWeight: 'bold',
    fontSize: 22,
    color: 'black',
    textAlign: 'right',
  },
});

// 0
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
