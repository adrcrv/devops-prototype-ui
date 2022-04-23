import React from 'react';
import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import HomeContainer from '../../../app/modules/home/home.container';

beforeEach(() => {
  jest.clearAllMocks();
});

describe('Home Container', () => {
  it('Expect Home to render && uptime to be 0H 0M 5S', () => {
    process.env.NEXT_PUBLIC_LAST_UPDATE = 'Sat Apr 23 02:13:45 -03 2022';
    jest.useFakeTimers().setSystemTime(new Date(process.env.NEXT_PUBLIC_LAST_UPDATE));
    const { getByText, rerender } = render(<HomeContainer />);
    act(() => {
      jest.advanceTimersByTime(5000);
      rerender(<HomeContainer />);
    });
    expect(getByText('0H 0M 5S')).toBeInTheDocument();
  });

  it('Expect Home to render unchanged', () => {
    process.env.NEXT_PUBLIC_LAST_UPDATE = 'Sat Apr 23 02:13:45 -03 2022';
    jest.useFakeTimers().setSystemTime(new Date(process.env.NEXT_PUBLIC_LAST_UPDATE));
    const { container } = render(<HomeContainer />);
    expect(container).toMatchSnapshot();
  });
});
