import React from 'react';
import { TouchableOpacity, StyleSheet, ViewStyle } from 'react-native';
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
      style={[styles.base, defaultStyle]}>
      <TonText>{props.label}</TonText>
    </TouchableOpacity>
  );
};

export default TonButton;

interface TonButtonInterface {
  label: string;
  loading?: boolean;
  onPress(): void;
}

interface TonButtonStylesInterface {
  base: ViewStyle;
  default: ViewStyle;
  loading: ViewStyle;
}

const styles = StyleSheet.create<TonButtonStylesInterface>({
  base: {
    paddingVertical: 10,
    borderRadius: 8,
    paddingHorizontal: 16,
  },
  default: {
    backgroundColor: TonColors.primary.dark,
  },
  loading: {
    backgroundColor: TonColors.black.default,
  }
});
