import React from 'react';
import ReactDOM from 'react-dom';

import Reboot from 'material-ui/Reboot';

import { makeMainRoutes } from './routes';
import registerServiceWorker from './registerServiceWorker';

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

import indigo from 'material-ui/colors/indigo';

import './index.css';

const theme = createMuiTheme({
    "palette": {
      "type": "light",
      "primary": indigo,
    },
    "typography": {
      "headline": {
        "fontSize": "1.5rem",
        "fontWeight": 700,
        "fontFamily": "\"Merriweather\", \"Georgia\", serif",
        "lineHeight": "1.35417em",
        "color": "rgba(0, 0, 0, 0.87)"
      },
      "title": {
        "fontSize": "1.3125rem",
        "fontWeight": 500,
        "fontFamily": "\"Merriweather\", \"Georgia\", serif",
        "lineHeight": "1.16667em",
        "color": "rgba(0, 0, 0, 0.87)"
      },
    }
});

const routes = makeMainRoutes();

const WrappedApp = (
  <MuiThemeProvider theme={theme}>
    <Reboot>{routes}</Reboot>
  </MuiThemeProvider>
);

ReactDOM.render(
  WrappedApp,
  document.getElementById('root')
);

registerServiceWorker();
