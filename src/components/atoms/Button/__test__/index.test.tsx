import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import { render, fireEvent } from '@testing-library/react';
import Button from '../index';

test('renders without crashing', () => {
  const section = document.createElement('section');
  ReactDOM.render(<Button>Text</Button>, section);
});

test('Should show the default type', () => {
  const { container } = render(<Button>Text</Button>);
  const button = container.querySelector('button');

  expect(button).toHaveAttribute('type', 'button');
});

test('should show the submit type', () => {
  const { container } = render(<Button type="submit">Text</Button>);
  const button = container.querySelector('button');

  expect(button).toHaveAttribute('type', 'submit');
});

test('Should be disabled', () => {
  const { container } = render(<Button disabled>Text</Button>);
  const button = container.querySelector('button');

  expect(button).toBeDisabled();
});

test('Should have a custom className', () => {
  const { container } = render(<Button className="custom">Text</Button>);
  const button = container.querySelector('button');

  expect(button).toHaveClass('custom');
});

test('Should have a custom style', () => {
  const { container } = render(
    <Button style={{ fontSize: '12px' }}>Text</Button>,
  );
  const button = container.querySelector('button');

  expect(button).toHaveStyle('font-size: 12px');
});

test('Should have block class', () => {
  const { container } = render(<Button block>Text</Button>);
  const button = container.querySelector('button');

  expect(button).toHaveClass('atom-button--block');
});

test('Should apply appearance', () => {
  const { container } = render(<Button appearance="outline">Text</Button>);
  const button = container.querySelector('button');

  expect(button?.className).toMatch(/outline/i);
});

test('Should apply color', () => {
  const { container } = render(<Button color="blue">Text</Button>);
  const button = container.querySelector('button');

  expect(button?.className).toMatch(/blue/i);
});

test('Should apply size', () => {
  const { container } = render(<Button size="medium">Text</Button>);
  const button = container.querySelector('button');

  expect(button?.className).toMatch(/medium/i);
});

test('Should honour additional classes passed in, adding not overriding', () => {
  const { container } = render(
    <Button className="button-custom" size="medium">
      Text
    </Button>,
  );
  const button = container.querySelector('button');

  expect(button).toHaveClass('button-custom');
  expect(button?.className).toMatch(/medium/i);
});

test('Should call onClick callback', (done) => {
  const clickHandler = () => {
    done();
  };

  const { container } = render(
    <Button
      onClick={() => {
        clickHandler();
      }}
    >
      Text
    </Button>,
  );
  const button = container.querySelector('button') || container;

  ReactTestUtils.Simulate.click(button);
});
