import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Menu, MenuProps } from './menu';
import SubMenu from './subMenu';
import MenuItem from './menuItem';

export default {
  title: 'owl/Menu',
  component: Menu,
} as Meta;

const Template: Story<MenuProps> = (args) => (
  <Menu {...args}>
    <MenuItem>首页</MenuItem>
    <MenuItem>资讯</MenuItem>
    <SubMenu title={'我的'}>
      <MenuItem>账号</MenuItem>
      <MenuItem>关于</MenuItem>
    </SubMenu>
  </Menu>
);

export const defaultMenu = Template.bind({});
defaultMenu.args = {};

export const verticalMenu = Template.bind({});
verticalMenu.args = {
  mode: 'vertical',
};
