import React from 'react';
import {View} from 'react-native';
import { ProductRepository } from './src/data';
import { TonText } from './src/ui';

const App: React.FC = () => {
  
  React.useEffect(() => {
    ProductRepository.get().then((response) => console.log(response)).catch((e) => console.log('error', e));
  }, []);

  return (
    <View>
      <TonText>Olá mundo</TonText>
    </View>
    );
};

export default App;
