import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import { render } from '@testing-library/react';
import Input from '../index';

test('renders without crashing', () => {
  const section = document.createElement('section');
  ReactDOM.render(<Input />, section);
});

test('Should have the default type', () => {
  const { container } = render(<Input />);
  const input = container.querySelector('input');
  expect(input).toHaveAttribute('type', 'text');
});

test('should show the number type', () => {
  const { container } = render(<Input type="number" />);
  const input = container.querySelector('input');
  expect(input).toHaveAttribute('type', 'number');
});

test('shoud be disabled', () => {
  const { container } = render(<Input disabled />);
  const input = container.querySelector('input');
  expect(input).toBeDisabled();
});

test('Should call onChange callback', (done) => {
  const onChangeHandler = () => {
    done();
  };
  const { container } = render(
    <Input
      onChange={() => {
        onChangeHandler();
      }}
    />,
  );
  const input = container.querySelector('input') || container;
  ReactTestUtils.Simulate.change(input);
});

test('Should call onPressEnter callback', (done) => {
  const pressEnterhandler = () => {
    done();
  };
  const { container } = render(
    <Input
      onPressEnter={() => {
        pressEnterhandler();
      }}
    />,
  );
  const input = container.querySelector('input') || container;
  ReactTestUtils.Simulate.keyDown(input, { key: 'enter' });
});

test('Should have a custom className', () => {
  const { container } = render(<Input className="custom" />);
  const input = container.querySelector('input');
  expect(input).toHaveClass('custom');
});

test('Should have a custom style', () => {
  const { container } = render(<Input style={{ fontSize: '12px' }} />);
  const input = container.querySelector('input');
  expect(input).toHaveStyle('font-size: 12px');
});
