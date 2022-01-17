import React from 'react';
import {View, StyleSheet, ViewStyle, TouchableOpacity, TextStyle} from 'react-native';
import { CartItem } from '../../../../data';
import { TonButton, TonColors, TonText } from '../../../../ui';
import moneyFormat from '../../../../utils/number/moneyFormat';

interface ItemCartInterface {
  item: CartItem;
  removeItem(): void;
  increment(): void;
  decrement(): void;
}

const ItemCart: React.FC<ItemCartInterface> = ({
  item, 
  removeItem, 
  increment, 
  decrement
}) => {
  return (
    <View style={styles.base}>
      <View style={styles.image}></View>
      <View>
        <TonText style={styles.title}>{item.product.name}</TonText>
        <TonText>Unitário: {moneyFormat(item.product.price)}</TonText>
        <TonText>Subtotal: {moneyFormat(item.product.price * item.quantity)}</TonText>
        <View style={styles.baseActions}>
          <TonButton onPress={increment} label='+' style={styles.miniButton} />
          <TonText style={{fontSize: 18, fontWeight: 'bold'}}>{item.quantity}  </TonText>
          <TonButton onPress={decrement} label='-' style={styles.miniButton} />
        </View>
      </View>
      <TouchableOpacity 
        style={styles.removeButton}
        onPress={removeItem}>
          <TonText>X</TonText>
      </TouchableOpacity>
    </View>
  )
};

export default ItemCart;

interface ItemCartStyleInterface {
  base: ViewStyle;
  image: ViewStyle;
  title: TextStyle;
  removeButton: ViewStyle;
  miniButton: ViewStyle;
  baseActions: ViewStyle;
}

const styles = StyleSheet.create<ItemCartStyleInterface>({
  base: {
    padding: 16,
    flexDirection: 'row',
  },
  image: {
    backgroundColor: TonColors.black.light,
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 16,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  removeButton: {
    backgroundColor: 'tomato',
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 0,
    top: '50%',
  },
  miniButton: {
    backgroundColor: TonColors.black.light,
    marginRight: 8,
  },
  baseActions: {
    flexDirection: 'row',
  }
});
