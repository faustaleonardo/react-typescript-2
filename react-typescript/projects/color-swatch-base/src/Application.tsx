import * as React from 'react';

import { ColorSwatch } from './ColorSwatch';

import { toRGB } from './utilities';
import { reducer } from './reducer';
import { ThemeContext } from './theme-context';
import ColorAdjustment from './ColorAdjustment';
import { ColorInput } from './ColorInput';
import { ColorSlider } from './ColorSlider';

const Application = () => {
  const themes = React.useContext(ThemeContext);
  const [rgb, dispatch] = React.useReducer(reducer, {
    red: 0,
    green: 0,
    blue: 0
  });

  return (
    <main style={{ borderColor: toRGB(rgb), ...themes.dark }}>
      <ColorSwatch {...rgb} />
      {/* <ColorInputs {...rgb} />
      <ColorSliders {...rgb} dispatch={dispatch} /> */}

      <ColorAdjustment Adjustment={ColorInput}></ColorAdjustment>
      <ColorAdjustment Adjustment={ColorSlider}></ColorAdjustment>
    </main>
  );
};

export default Application;
