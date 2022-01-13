import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { TonText } from '..';

/**
 * Componente de botao default
 */
const TonButton: React.FC<TonButtonInterface> = (props) => {
  return (
    <TouchableOpacity onPress={!props.loading ? props.onPress : () => {}}>
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
