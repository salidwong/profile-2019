import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css'
import './assets/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components';
import { Theme } from './components/theme'

const AppWithRouter = () => (
  <ThemeProvider theme={Theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>
  
)

ReactDOM.render(<AppWithRouter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
