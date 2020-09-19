import React from 'react';
import classNames from 'classnames';

type ButtonSize = 'lg' | 'sm';

type ButtonType = 'primary' | 'default' | 'danger' | 'link';

interface BaseButtonProps {
  /**
   * 自定义 className
   */
  className?: string;
  /**
   * 设置为不可用状态
   */
  disabled?: boolean;
  /**
   * 按钮的尺寸大小
   */
  size?: ButtonSize;
  /**
   * 按钮的类型
   */
  btnType?: ButtonType;
  /**
   * 按钮文字
   */
  children: React.ReactNode;
  /**
   * 当按钮类型为`link`时，`href`用来设置跳转路径
   */
  href?: string;
}

type NativeButtonProps = BaseButtonProps &
  React.ButtonHTMLAttributes<HTMLElement>;

type AnchorButtonProps = BaseButtonProps &
  React.AnchorHTMLAttributes<HTMLElement>;

export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;

export const Button: React.FC<ButtonProps> = (props) => {
  const {
    btnType,
    className,
    disabled,
    size,
    children,
    href,
    ...restProps
  } = props;
  // btn, btn-lg, btn-primary
  const classes = classNames('btn', className, {
    [`btn-${btnType}`]: btnType !== undefined,
    [`btn-${size}`]: size !== undefined,
    disabled: btnType === 'link' && disabled,
  });
  if (btnType === 'link' && href) {
    return (
      <a className={classes} href={href} {...restProps}>
        {children}
      </a>
    );
  } else {
    return (
      <button className={classes} disabled={disabled} {...restProps}>
        {children}
      </button>
    );
  }
};

Button.defaultProps = {
  disabled: false,
  btnType: 'default',
};
