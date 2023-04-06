import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Levels from './screens/Levels';
import Start from './screens/Start';
import Level1 from './screens/Level1';
import Level2 from './screens/Level2';
import Level3 from './screens/Level3';
import One_OR_Two from './screens/OneorTwo';
import TwoPlayers from './screens/TwoPlayers';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="One_OR_Two" component={One_OR_Two}/>
        <Stack.Screen name="Levels" component={Levels} />
        <Stack.Screen name="TwoPlayers" component={TwoPlayers} />
        <Stack.Screen name="Level1" component={Level1} />
        <Stack.Screen name="Level2" component={Level2} />
        <Stack.Screen name="Level3" component={Level3} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

