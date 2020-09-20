import React from 'react';
import '../src/styles/index.scss';
import { addDecorator } from '@storybook/react';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

const wrapperStyle: React.CSSProperties = {
  padding: '20px 40px',
};

const storyWrapper = (storyFn: any) => (
  <div style={wrapperStyle}>{storyFn()}</div>
);

addDecorator(storyWrapper);
