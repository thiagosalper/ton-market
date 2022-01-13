import React from 'react';
import {render} from '@testing-library/react-native';
import { TonText } from '../../../src/ui';

describe('TonText', () => {
  it('should render a text', () => {
    const mock = 'Thiago Pereira';
    const { getByText, toJSON } = render(<TonText>{mock}</TonText>);
    
    expect(getByText(mock)).toBeTruthy();
    expect(toJSON()).toMatchSnapshot();
  });
});