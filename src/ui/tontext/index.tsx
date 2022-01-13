import React from 'react';
import { TextProps, Text } from 'react-native';

/**
 * Componente de texto isolado para tratativas globais
 * @param props interface textProps base
 * @returns a text component
 */
const TonText: React.FC<TextProps> = (props) => {
  return <Text {...props}>{props.children}</Text>;
}

export default TonText;
