import React, { useContext } from 'react';
import classNames from 'classnames';
import { MenuContext } from './context';
import { MenuItemProps } from './types';

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { index, disabled, className, style, children } = props;

  const context = useContext(MenuContext);

  const classes = classNames('menu-item', className, {
    'is-disabled': disabled,
    'is-active': context.index === index,
  });

  const handleClick = () => {
    if (
      context.onSelect !== undefined &&
      !disabled &&
      typeof index === 'string'
    ) {
      context.onSelect(index);
    }
  };

  return (
    <li className={classes} style={style} onClick={handleClick}>
      {children}
    </li>
  );
};

MenuItem.displayName = 'MenuItem';

export default MenuItem;
