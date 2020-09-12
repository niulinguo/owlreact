import React, { useState } from 'react';
import classNames from 'classnames';
import { SelectCallback } from './types';
import { IMenuContext, MenuContext } from './context';
import { MenuItemProps } from './types';

type MenuMode = 'horizontal' | 'vertical';

export interface MenuProps {
  defaultIndex?: number;
  className?: string;
  mode?: MenuMode;
  style?: React.CSSProperties;
  onSelect?: SelectCallback;
}

const Menu: React.FC<MenuProps> = (props) => {
  const { className, mode, style, children, defaultIndex, onSelect } = props;
  const [currentActiveIndex, setActiveIndex] = useState<number>(
    defaultIndex === undefined ? 0 : defaultIndex
  );
  const classes = classNames('owl-menu', className, {
    'menu-vertical': mode === 'vertical',
  });
  const handleClick = (index: number) => {
    setActiveIndex(index);
    if (onSelect) {
      onSelect(index);
    }
  };
  const passedContext: IMenuContext = {
    index: currentActiveIndex,
    onSelect: handleClick,
  };

  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<
        MenuItemProps
      >;
      const { displayName } = childElement.type;
      if (displayName === 'MenuItem') {
        return React.cloneElement(childElement, { index });
      } else {
        console.warn(
          'warning: Menu has a child which is not a MenuItem component'
        );
      }
    });
  };

  return (
    <ul className={classes} style={style} data-testid={'test-menu'}>
      <MenuContext.Provider value={passedContext}>
        {renderChildren()}
      </MenuContext.Provider>
    </ul>
  );
};

Menu.defaultProps = {
  defaultIndex: 0,
  mode: 'horizontal',
};

export default Menu;
