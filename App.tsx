import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/pages/HomeScreen';

type RootStackParamList = {
  Home: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

function App() {
  return (
    <RootStack.Navigator initialRouteName='Home'>
      <RootStack.Screen name='Home' component={HomeScreen} />
    </RootStack.Navigator>
  );
}

export default App;
