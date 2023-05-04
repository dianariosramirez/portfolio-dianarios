import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// Components
import App from './App.jsx';

//Style
import "./assets/scss/main.scss";

// Traslations
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import global_es from  "./traslations/es/global.json";
import global_en from  "./traslations/en/global.json";

i18next.init( {
    interpolation: { escapeValue: false },
    lng: "es",
    resources: {
        es: {
            global: global_es,
        },
        en: {
            global: global_en
        }
    }
})

ReactDOM.createRoot(document.getElementById('root')).render(
    <I18nextProvider i18n={ i18next }>
        <BrowserRouter>
            <App />
        </BrowserRouter>   
    </I18nextProvider>

)
