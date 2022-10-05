import React from 'react';
import {
  Text,
  View,
  Image,
  Dimensions
} from 'react-native';

import Background from './components/Background';
import Cards from './components/Cards';

const App = () => {
  return (
    <View
      style={{
        width: "100%",
        height: "100%",

      }}
    >
      <Background>
      </Background>
    </View>
  );
};


export default App;
