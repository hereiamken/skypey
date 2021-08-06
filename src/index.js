import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./store";

const render = () => {
  skypeyLog();
  return ReactDOM.render(<App/>, document.getElementById('root'));
};

render();
store.subscribe(render);

function skypeyLog (){
  console.log("%c Rendered with 👉 👉 👇 ", "background: purple; color:#fff");
  console.log(store.getState());
}

reportWebVitals();
