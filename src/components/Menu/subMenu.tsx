import React, { FunctionComponentElement, useContext, useState } from 'react';
import classNames from 'classnames';
import { MenuContext } from './context';
import { MenuItemProps } from './types';
import Icon from '../Icon';
import Transition from '../Transition';

export interface SubMenuProps {
  index?: string;
  title: string;
  className?: string;
}

const SubMenu: React.FC<SubMenuProps> = (props) => {
  const { index, title, className, children } = props;

  const context = useContext(MenuContext);

  const openedSubMenus = context.defaultOpenSubMenus as string[];

  const isOpened =
    index !== undefined &&
    context.mode === 'vertical' &&
    openedSubMenus.includes(index);

  const [menuOpen, setMenuOpen] = useState(isOpened);

  const classes = classNames('menu-item submenu-item', className, {
    'is-active': context.index === index,
    'is-opened': menuOpen,
    'is-vertical': context.mode === 'vertical',
  });

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(!menuOpen);
  };

  let timer: any;

  const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
    clearTimeout(timer);
    e.preventDefault();
    timer = setTimeout(() => {
      setMenuOpen(toggle);
    }, 300);
  };

  const clickEvents: React.HTMLAttributes<HTMLElement> =
    context.mode === 'vertical'
      ? {
          onClick: handleClick,
        }
      : {};

  const hoverEvents: React.HTMLAttributes<HTMLElement> =
    context.mode === 'horizontal'
      ? {
          onMouseEnter: (e: React.MouseEvent) => {
            handleMouse(e, true);
          },
          onMouseLeave: (e: React.MouseEvent) => {
            handleMouse(e, false);
          },
        }
      : {};

  const renderChildren = () => {
    const childrenComponent = React.Children.map(children, (child, i) => {
      const childElement = child as FunctionComponentElement<MenuItemProps>;
      const { displayName } = childElement.type;
      if (displayName === 'MenuItem') {
        return React.cloneElement(childElement, { index: `${index}-${i}` });
      } else {
        console.warn(
          'warning: Menu has a child which is not a MenuItem component'
        );
      }
    });

    const subMenuClasses = classNames('owl-submenu', {
      'menu-opened': menuOpen,
    });

    return (
      <Transition in={menuOpen} timeout={300} animation={'zoom-in-top'}>
        <ul className={subMenuClasses}>{childrenComponent}</ul>
      </Transition>
    );
  };

  return (
    <li key={index} className={classes} {...hoverEvents}>
      <div className={'submenu-title'} {...clickEvents}>
        {title}
        <Icon icon={'angle-down'} className={'arrow-icon'} />
      </div>
      {renderChildren()}
    </li>
  );
};

SubMenu.displayName = 'SubMenu';

export default SubMenu;
