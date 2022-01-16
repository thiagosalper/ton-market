import React from 'react';
import { TouchableOpacity, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import TonText from '../tonText';
import TonColors from '../colors';

/**
 * Componente de botao default
 */
const TonButton: React.FC<TonButtonInterface> = (props) => {
  const defaultAction: () => void = !props.loading ? props.onPress : () => {};
  const defaultStyle: ViewStyle = props.loading ? styles.loading : styles.default;
  return (
    <TouchableOpacity 
      onPress={defaultAction}
      style={[styles.base, defaultStyle, props.style]}>
      <TonText style={[styles.baseLabel, props.styleLabel || {}]}>{props.label}</TonText>
    </TouchableOpacity>
  );
};

export default TonButton;

interface TonButtonInterface {
  label: string;
  loading?: boolean;
  onPress(): void;
  style?: ViewStyle;
  styleLabel?: TextStyle;
}

interface TonButtonStylesInterface {
  base: ViewStyle;
  default: ViewStyle;
  loading: ViewStyle;
  baseLabel: TextStyle;
}

const styles = StyleSheet.create<TonButtonStylesInterface>({
  base: {
    paddingVertical: 10,
    borderRadius: 8,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  default: {
    backgroundColor: TonColors.secondary.dark,
  },
  loading: {
    backgroundColor: TonColors.black.default,
  }, 
  baseLabel: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  }
});
