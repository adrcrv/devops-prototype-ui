import React from 'react';
import { render } from '@testing-library/react';
import FooterContainer from '../../../app/modules/footer/footer.container';

describe('Home', () => {
  it('Renders homepage unchanged', () => {
    const { container } = render(<FooterContainer />);
    expect(container).toMatchSnapshot();
  });
});
