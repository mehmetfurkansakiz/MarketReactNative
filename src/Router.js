import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Products from './pages/Products/Products';
import Detail from './pages/Detail/Detail';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ProductsPage"
          component={Products}
          options={{
            title: 'Dükgan',
            headerStyle: {backgroundColor: '#00186f'},
            headerTitleStyle: {color: '#FFFFFF'},
          }}
        />
        <Stack.Screen
          name="DetailPage"
          component={Detail}
          options={{
            title: 'Detay',
            headerStyle: {backgroundColor: '#00186f'},
            headerTitleStyle: {color: '#FFFFFF'},
            headerTintColor: 'white',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
