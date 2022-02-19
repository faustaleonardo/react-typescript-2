import { render } from 'react-dom';

import Application from './Application';
import { ThemeContextProvider } from './theme-context';
import { RGBContextProvider } from './context';

import './style.scss';

const rootElement = document.getElementById('root');
render(
  <ThemeContextProvider>
    <RGBContextProvider>
      <Application />
    </RGBContextProvider>
  </ThemeContextProvider>,
  rootElement
);
