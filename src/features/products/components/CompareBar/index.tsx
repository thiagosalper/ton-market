import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { Product } from '../../../../data';
import { TonColors, TonText } from '../../../../ui';

const CompareBar: React.FC<{selection: Product[]}> = ({selection}) => {
  return (
    <View style={styles.base}>
      <TonText>Comparar produtos</TonText>
      {
        selection && selection.map((item, index) => (
          <View key={`itemCompare${index}`}>
            <TonText>{item.name}</TonText>
          </View>
        ))
      }
    </View>
  );
};

export default CompareBar;

interface CompareBarStylesInterfaace {
  base: ViewStyle;
}

const styles = StyleSheet.create<CompareBarStylesInterfaace>({
  base: {
    backgroundColor: TonColors.secondary.default,
    paddingVertical: 24,
    paddingHorizontal: 16,
  }
})