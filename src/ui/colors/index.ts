interface ColorSchema {
  dark: string;
  default: string;
  light?: string;
}

interface TonColorsInterface {
  primary: ColorSchema;
  secondary: ColorSchema;
  black: ColorSchema;
}

const colors: TonColorsInterface = {
  primary: {
    dark: '#A30',
    default: '#D30',
  },
  secondary: {
    dark: '#1AD',
    default: '#9CD',
  },
  black: {
    dark: '#000',
    default: '#333',
    light: '#999',
  },
};

export default colors;
