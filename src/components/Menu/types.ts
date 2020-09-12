import React from 'react';

export type SelectCallback = (selectedIndex: number) => void;

export interface MenuItemProps {
  index?: number;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}
