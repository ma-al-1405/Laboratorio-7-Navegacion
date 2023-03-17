import { NavigationContainer } from '@react-navigation/native';
import React, {useState} from 'react';
import 'react-native-gesture-handler';
import { DrawerNavigation} from './src/navigation/DrawerNavigation';

function App (){
  return(

      <NavigationContainer>
        <DrawerNavigation />
        {/* <StackNavigation /> */}
      </NavigationContainer>
  )
}
export default App