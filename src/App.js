import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';

function App() {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.container}>Merhaba!</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default App;
