import * as React from 'react';

import './styles.scss';

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  onPressEnter?: () => void;
  error?: boolean;
}

export const Input: React.FC<Props> = ({
  className,
  onPressEnter,
  error,
  ...props
}) => {
  const keyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if ((event.key || '').toLowerCase() === 'enter') {
      if (onPressEnter) {
        onPressEnter();
      }
    }
  };

  let classNameFinal = `atom-input`;

  if (error) {
    classNameFinal += ' atom-input--error';
  }

  if (className) {
    classNameFinal += ` ${className}`;
  }

  return (
    <input
      type="text"
      className={classNameFinal}
      onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
        keyDownHandler(e);
      }}
      placeholder="Input some text..."
      {...props}
    />
  );
};

Input.defaultProps = {
  onPressEnter: undefined,
};

export default Input;
