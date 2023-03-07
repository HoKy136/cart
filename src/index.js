import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './db/Redux/Store';
import { BrowserRouter } from 'react-router-dom';
import {I18nextProvider} from 'react-i18next';
import i18next from 'i18next';
import './Translate/i18'
i18next.init({
  interpolation: { escapeValue: false },  // React already does escaping
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <I18nextProvider i18n={i18next}> 
      <Provider store={store}>
        <App />
      </Provider>
      </I18nextProvider>
    </BrowserRouter>
);

reportWebVitals();
