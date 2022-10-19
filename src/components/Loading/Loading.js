import LottieView from 'lottie-react-native';
import React from 'react';

function Loading() {
  return <LottieView source={require('../../assets/loading.json')} autoPlay />;
}

export default Loading;
