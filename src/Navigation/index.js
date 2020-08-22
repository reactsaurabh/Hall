import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SectionScreen from '../screen/SectionScreen';
import SelectHall from '../screen/SelectHall';
import AnnouncementScreen from '../screen/AnnouncementScreen';
import FoodScreen from '../screen/FoodScreen';
import {path} from '../Constants';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={path.SECTIONSCREEN}>
        <Stack.Screen name={path.SECTIONSCREEN} component={SectionScreen} />
        <Stack.Screen name={path.AVAILABLEHALL} component={SelectHall} />
        <Stack.Screen name={path.ANNOUNCEMENT} component={AnnouncementScreen} />
        <Stack.Screen name={path.FOOD} component={FoodScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
