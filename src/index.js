import React from 'react'; 
import ReactDOM from 'react-dom'; 
import { BrowserRouter } from 'react-router-dom'; 
import { AppContainer } from 'react-hot-loader'; 
 
 
import App from './App'; 
 
 
const render = (Component) => { 
  ReactDOM.render( 
    <AppContainer> 
      <BrowserRouter> 
        <Component /> 
      </BrowserRouter> 
    </AppContainer>, 
    document.getElementById('app'), 
  ); 
}; 
 
render(App); 
 
if (module.hot) { 
  module.hot.accept('./App', () => { 
    const App = require('./App').default; 
    render(App); 
  }); 
} 