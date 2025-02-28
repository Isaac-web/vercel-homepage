import { ReactNode } from 'react';

export type Framework = {
  name: string;
  logo: string;
  color: string;
  render?(): ReactNode;
};
