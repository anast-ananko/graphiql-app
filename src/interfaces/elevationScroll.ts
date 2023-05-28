import { ReactElement } from 'react';

export interface IElevationScroll {
  children: ReactElement;
  setIsScroll: (value: boolean) => void;
}
