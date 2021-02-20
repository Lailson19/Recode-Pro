import React from 'react';
import {
  View,
  Text,
  StatusBar
} from 'react-native';

import Rotas from './src/routes';

function App(){
  return(
    <View>
      <StatusBar hidden />
      <Rotas />
    </View>
  )
}


export default App;