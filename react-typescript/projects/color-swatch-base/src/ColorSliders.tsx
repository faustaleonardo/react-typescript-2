import React from 'react';
import { ColorSlider } from './ColorSlider';
import { AdjustmentAction } from './reducer';
import { RGBColorType } from './types';

// type ColorsSlidersProps = RGBColorType & {
//   dispatch: React.Dispatch<AdjustmentAction>;
// };

interface ColorsSlidersProps extends RGBColorType {
  dispatch: React.Dispatch<AdjustmentAction>;
}

export const ColorSliders = ({
  red,
  green,
  blue,
  dispatch
}: ColorsSlidersProps) => {
  const adjustRed = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'ADJUST_RED', payload: +e.target.value });
  };
  const adjustBlue = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'ADJUST_BLUE', payload: +e.target.value });
  };
  const adjustGreen = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'ADJUST_GREEN', payload: +e.target.value });
  };

  return (
    <section className="color-sliders">
      <ColorSlider
        id="red-slider"
        label="Red"
        value={red}
        onChange={adjustRed}
      />
      <ColorSlider
        id="green-slider"
        label="Green"
        value={green}
        onChange={adjustGreen}
      />
      <ColorSlider
        id="blue-slider"
        label="Blue"
        value={blue}
        onChange={adjustBlue}
      />
    </section>
  );
};
