import React from 'react';
import { Meta, Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button, ButtonProps } from './button';

export default {
  title: 'owl/Button',
  component: Button,
} as Meta<ButtonProps>;

const Template: Story<ButtonProps> = (args) => <Button {...args}>按钮</Button>;

export const defaultButton = Template.bind({});
defaultButton.args = {
  onClick: action('clicked'),
};

export const largeButton = Template.bind({});
largeButton.args = {
  size: 'lg',
};

export const smallButton = Template.bind({});
smallButton.args = {
  size: 'sm',
};

export const primaryButton = Template.bind({});
primaryButton.args = {
  btnType: 'primary',
};

export const dangerButton = Template.bind({});
dangerButton.args = {
  btnType: 'danger',
};

export const linkButton = Template.bind({});
linkButton.args = {
  btnType: 'link',
  href: 'https://www.baidu.com',
};
