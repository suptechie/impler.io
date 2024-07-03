import { PropsWithChildren, ReactNode } from 'react';
import { Button as MantineButton, MantineSize } from '@mantine/core';
import useStyles from './Button.styles';

interface IButtonProps {
  variant?: 'filled' | 'outline';
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  size?: MantineSize;
  color?: 'blue' | 'red' | 'gray' | string;
  leftIcon?: ReactNode;
  fullWidth?: boolean;
}

export function Button({
  variant,
  disabled,
  children,
  loading,
  onClick,
  size = 'md',
  color,
  leftIcon,
  fullWidth,
}: PropsWithChildren<IButtonProps>) {
  const { classes } = useStyles();

  return (
    <MantineButton
      leftIcon={leftIcon}
      disabled={disabled}
      variant={variant}
      loading={loading}
      onClick={onClick}
      size={size}
      color={color}
      classNames={classes}
      fullWidth={fullWidth}
    >
      {children}
    </MantineButton>
  );
}
