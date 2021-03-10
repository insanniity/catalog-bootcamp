import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import * as Updates from "expo-updates";


const App: React.FC = () => {
  async function checkUpdate() {
    const update = await Updates.checkForUpdateAsync();
    if(update.isAvailable){
      await Updates.fetchUpdateAsync();
      await Updates.reloadAsync();
    }
  }

  useEffect(()=> {checkUpdate();}, []);

  return(
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  )
};

export default App;