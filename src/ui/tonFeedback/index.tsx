import React, { useEffect } from 'react';
import { StyleSheet, TextStyle, View, ViewStyle } from 'react-native';
import { TonText } from '..';

type FeedBoxTypes = 'success' | 'error' | 'info';

interface FeedbackBoxInterface {
  type: FeedBoxTypes;
  text: string;
  callback(): void;
}

const FeedbackBox: React.FC<FeedbackBoxInterface> = ({
  type = 'success',
  text, 
  callback,
}) => {
  const styleTypes: Record<FeedBoxTypes, ViewStyle> = {
    'success': styles.boxSuccess,
    'error': styles.boxError,
    'info': styles.boxInfo,
  }

  useEffect(() => {
    new Promise(async (resolve) => {
      setTimeout(resolve, 4000);
    }).then((_) => callback && callback());
  }, []);

  return (
    <View style={[styles.base, styleTypes[type]]}>
      <TonText style={styles.message} adjustsFontSizeToFit>{text}</TonText>
    </View>
  );
};

export default FeedbackBox;

interface FeedbackBoxStylesInterface {
  base: ViewStyle;
  message: TextStyle;
  boxSuccess: ViewStyle;
  boxError: ViewStyle;
  boxInfo: ViewStyle;
}

const styles = StyleSheet.create<FeedbackBoxStylesInterface>({
  boxSuccess: {
    backgroundColor: 'green', 
  },
  boxError: {
    backgroundColor: 'tomato', 
  },
  boxInfo: {
    backgroundColor: '#ccc', 
  },
  base: {
    
    height: 130, 
    position: 'absolute', 
    width: '100%', 
    bottom: 0, 
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  message: {
    color: 'white', 
    fontWeight: 'bold', 
    fontSize: 24
  },
});
