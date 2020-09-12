import { createContext } from 'react';
import { SelectCallback } from './types';

export interface IMenuContext {
  index: number;
  onSelect?: SelectCallback;
}

export const MenuContext = createContext<IMenuContext>({ index: 0 });
