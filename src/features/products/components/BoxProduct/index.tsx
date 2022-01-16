import React from 'react';
import {View, StyleSheet, ViewStyle, TouchableOpacity, TextStyle} from 'react-native';
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
      <TonText style={styles.title}>{item.name}</TonText>
      <TonText>{item.price}</TonText>
      <TonButton label={'ADICIONAR'} onPress={addItem} />
      <TonButton label={'REMOVER'} onPress={removeItem} style={styles.removeButton} />
      <TouchableOpacity onPress={onCompare}><TonText>Comparar</TonText></TouchableOpacity>
    </View>
  )
};

export default BoxProduct;

interface BoxProductStyleInterface {
  base: ViewStyle;
  image: ViewStyle;
  removeButton: ViewStyle;
  title: TextStyle;
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
  },
  removeButton: {
    backgroundColor: 'tomato',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  }
});
