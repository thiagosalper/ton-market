import React from 'react';
import {render} from '@testing-library/react-native';
import { TonFeedback } from '../../../src/ui';
import { FeedbackBoxInterface } from '../../../src/ui/tonFeedback';

describe('TonFeedback', () => {
  it('should render a feedback component', () => {
    const mock: FeedbackBoxInterface = { type: 'success', text: 'Mensagem teste', callback: () => {}};
    const { getByText, toJSON } = render(<TonFeedback {...mock} />);
    
    expect(getByText(mock.text)).toBeTruthy();
    expect(toJSON()).toMatchSnapshot();
  });
  it('should render error type', () => {
    const mock: FeedbackBoxInterface = { type: 'error', text: 'Mensagem teste erro', callback: () => {}};
    const { getByTestId, toJSON } = render(<TonFeedback {...mock} />);
    
    expect(getByTestId('boxfeedback_error')).toBeTruthy();
    expect(toJSON()).toMatchSnapshot();
  });
  it('should render info type', () => {
    const mock: FeedbackBoxInterface = { type: 'info', text: 'Mensagem teste info', callback: () => {}};
    const { getByTestId, toJSON } = render(<TonFeedback {...mock} />);
    
    expect(getByTestId('boxfeedback_info')).toBeTruthy();
    expect(toJSON()).toMatchSnapshot();
  });
});