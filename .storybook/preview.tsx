import React from 'react';
import '../src/styles/index.scss';
import { addDecorator } from '@storybook/react';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

const styles: React.CSSProperties = {
  textAlign: 'center',
};

const centerDecorator = (storyFn: any) => <div style={styles}>{storyFn()}</div>;
addDecorator(centerDecorator);
