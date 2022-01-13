import React from 'react';
import {render} from '@testing-library/react-native';
import { TonButton } from '../../../src/ui';

describe('TonButton', () => {
  const STATUS: Record<string, string> = {
    DEFAULT: 'Clique aqui',
    LOADING: 'CARREGANDO',
  }

  it('should render a default button', () => {
    const { getByText, toJSON } = render(<TonButton label={STATUS.DEFAULT} />);
    
    expect(getByText(STATUS.DEFAULT)).toBeTruthy();
    expect(toJSON()).toMatchSnapshot();
  });

  it('should render a loading button', () => {
    const { getByText, toJSON } = render(<TonButton label={STATUS.LOADING} loading />);
    
    expect(getByText(STATUS.LOADING)).toBeTruthy();
    expect(toJSON()).toMatchSnapshot();
  });
});