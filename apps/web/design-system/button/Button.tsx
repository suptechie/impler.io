import { PropsWithChildren } from 'react';
import useStyles from './Button.styles';
import { Button as MantineButton, ButtonProps as MantineButtonProps } from '@mantine/core';

export type ButtonColors = 'blue' | 'invariant' | 'red' | 'green';
export type ButtonVariants = 'filled' | 'outline';

interface ButtonProps extends MantineButtonProps {
  color?: ButtonColors;
  component?: any;
  type?: 'button' | 'submit' | 'reset';
  variant?: ButtonVariants;
  href?: string;
  fullWidth?: boolean;
  onClick?: () => void;
}

export function Button({
  children,
  leftIcon,
  rightIcon,
  href,
  fullWidth,
  onClick,
  type,
  loading,
  disabled = false,
  component = 'button',
  size = 'sm',
  color = 'blue',
  variant = 'filled',
  ...rest
}: PropsWithChildren<ButtonProps>) {
  const { classes } = useStyles({ variant, color, fullWidth });

  return (
    <MantineButton
      component={component}
      href={href}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      classNames={classes}
      size={size}
      type={type}
      fullWidth={fullWidth}
      onClick={onClick}
      loading={loading}
      disabled={disabled}
      {...rest}
    >
      {children}
    </MantineButton>
  );
}
