import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createGlobalStyle, ThemeProvider} from "styled-components";

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`
const theme = {
    media:{
        phone: "(max-width: 425px)",
        tablet: "(max-width: 740px) and (min-width:425px)",
        note: "(min-width:740px)"
    }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider theme={theme}>
        <Global/>
        <App/>
    </ThemeProvider>
);

