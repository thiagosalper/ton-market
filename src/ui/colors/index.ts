interface ColorSchema {
  dark: string;
  default: string;
}

interface TonColorsInterface {
  primary: ColorSchema;
  secondary: ColorSchema;
  black: ColorSchema;
}

const colors: TonColorsInterface = {
  primary: {
    dark: 'red',
    default: 'tomato',
  },
  secondary: {
    dark: 'green',
    default: 'acqua',
  },
  black: {
    dark: 'black',
    default: '#333',
  },
};

export default colors;
