import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx';
import { Provider } from 'react-redux';
import './index.css'
import store from './Redux/Store/index';

ReactDOM.createRoot(document.getElementById('root')!).render(
 <Provider store={store}>
   <React.StrictMode>
    <App />
  </React.StrictMode>,
 </Provider>
)
