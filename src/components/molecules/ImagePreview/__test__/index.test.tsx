import React from 'react';
import ReactDOM from 'react-dom';
// import ReactTestUtils from 'react-dom/test-utils';
// import { render } from '@testing-library/react';
import ImagePreview from '../index';

test('renders without crashing', () => {
  const section = document.createElement('section');
  ReactDOM.render(<ImagePreview />, section);
});
