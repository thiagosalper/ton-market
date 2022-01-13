import React from 'react';
import {View, StyleSheet, ViewStyle, TouchableOpacity} from 'react-native';
import { Product } from '../../../../data';
import { TonButton, TonText } from '../../../../ui';

interface BoxProductInterface {
  item: Product; 
  addItem(): void;
  removeItem(): void;
  onCompare(): void;
}

const BoxProduct: React.FC<BoxProductInterface> = ({item, addItem, removeItem, onCompare}) => {
  return (
    <View style={styles.base}>
      <View style={styles.image}>

      </View>
      <TonText>{item.name}</TonText>
      <TonText>{item.price}</TonText>
      <TonButton label={'ADICIONAR'} onPress={addItem} />
      <TouchableOpacity onPress={onCompare}><TonText>Comparar</TonText></TouchableOpacity>
    </View>
  )
};

export default BoxProduct;

interface BoxProductStyleInterface {
  base: ViewStyle;
  image: ViewStyle;
}

const styles = StyleSheet.create<BoxProductStyleInterface>({
  base: {
    padding: 16,
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    backgroundColor: '#ccc',
    width: 80,
    height: 80,
    borderRadius: 8,
  }
});
