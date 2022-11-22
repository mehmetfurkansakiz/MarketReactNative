import {StyleSheet, Dimensions} from 'react-native';

const DeviceSize = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
  },
  logo: {
    height: DeviceSize.height / 8,
    width: DeviceSize.width * 0.3,
    resizeMode: 'contain',
    tintColor: '#00186f',
  },
  logo_text: {
    fontWeight: 'bold',
    color: '#00186f',
    fontSize: 35,
  },
  logo_container: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'white',
    margin: 10,
    marginLeft: 30,
    marginRight: 30,
    flexDirection: 'row',
  },
  body_container: {},
});
