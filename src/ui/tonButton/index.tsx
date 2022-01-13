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
      style={defaultStyle}>
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
  default: ViewStyle;
  loading: ViewStyle;
}

const styles = StyleSheet.create<TonButtonStylesInterface>({
  default: {
    paddingVertical: 10,
    backgroundColor: TonColors.primary.dark,
  },
  loading: {
    paddingVertical: 10,
    backgroundColor: TonColors.black.default,
  }
});
