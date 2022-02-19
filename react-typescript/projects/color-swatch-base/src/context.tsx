import * as React from 'react';
import { AdjustmentAction, reducer } from './reducer';
import { RGBColorType } from './types';

interface RGBContextType extends RGBColorType {
  dispatch: React.Dispatch<AdjustmentAction>;
}

interface RGBContextProviderProps {
  children: React.ReactNode;
}

// because dispatch can only be used after we defined useReducer, that is why we can use 'as' keyword to tell typescript it is okay.
// const initialState = {
//   red: 0,
//   green: 0,
//   blue: 0,
//   dispatch: () => {}
// }
const initialState = {
  red: 0,
  green: 0,
  blue: 0
};

export const RGBContext = React.createContext<RGBContextType>(
  initialState as RGBContextType
);

export const RGBContextProvider = ({ children }: RGBContextProviderProps) => {
  const [rgb, dispatch] = React.useReducer(reducer, initialState);

  return (
    <RGBContext.Provider value={{ ...rgb, dispatch }}>
      {children}
    </RGBContext.Provider>
  );
};
