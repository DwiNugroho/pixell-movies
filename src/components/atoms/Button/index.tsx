import * as React from 'react';

import './styles.scss';

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick?: () => void;
  block?: boolean;
  size?: 'small' | 'medium' | 'large';
  appearance?: 'primary' | 'outline';
  color?: 'none' | 'red' | 'blue' | 'yellow';
  disabled?: boolean;
  className?: string;
}

export const Button: React.FC<Props> = ({
  children,
  onClick,
  size,
  appearance,
  color,
  disabled,
  block,
  className,
  ...props
}) => {
  const getSize =
    (size || '').toLocaleLowerCase() === 'large'
      ? 'atom-button--large'
      : (size || '').toLocaleLowerCase() === 'small'
      ? 'atom-button--small'
      : 'atom-button--medium';

  const getApperiance =
    (appearance || '').toLocaleLowerCase() === 'outline'
      ? 'atom-button--outline'
      : 'atom-button--primary';

  const getColor =
    (color || '').toLocaleLowerCase() === 'red'
      ? 'atom-button--red'
      : (color || '').toLocaleLowerCase() === 'blue'
      ? 'atom-button--blue'
      : (color || '').toLocaleLowerCase() === 'yellow'
      ? 'atom-button--yellow'
      : '';

  let classNameFinal = `atom-button ${getSize} ${getApperiance}`;

  if (getColor) {
    classNameFinal += ` ${getColor}`;
  }

  if (block) {
    classNameFinal += ' atom-button--block';
  }

  if (className) {
    classNameFinal += ` ${className}`;
  }

  return (
    <button
      type="button"
      className={classNameFinal}
      onClick={() => {
        onClick && onClick();
      }}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  children: 'Button',
  onClick: undefined,
  size: 'medium',
  appearance: 'primary',
  color: 'none',
};

export default Button;
