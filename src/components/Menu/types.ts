import React from 'react';

export type MenuMode = 'horizontal' | 'vertical';

export type SelectCallback = (selectedIndex: string) => void;

export interface MenuItemProps {
  index?: string;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}
