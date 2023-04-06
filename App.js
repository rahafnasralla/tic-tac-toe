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
        <Stack.Screen name="Tic Tac Toe" component={Start} />
        <Stack.Screen name="One Or Two Players" component={One_OR_Two}/>
        <Stack.Screen name="One Player" component={Levels} />
        <Stack.Screen name="Two Players" component={TwoPlayers} />
        <Stack.Screen name="Hard" component={Level1} />
        <Stack.Screen name="Medium" component={Level2} />
        <Stack.Screen name="Easy" component={Level3} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

