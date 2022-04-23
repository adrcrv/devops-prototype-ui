import React from 'react';
import { render } from '@testing-library/react';
import AppBarContainer from '../../../app/modules/app-bar/app-bar.container';

describe('AppBar', () => {
  it('Renders homepage unchanged', () => {
    const { container } = render(<AppBarContainer />);
    expect(container).toMatchSnapshot();
  });
});
