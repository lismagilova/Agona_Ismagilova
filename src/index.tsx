//будет рендериться в index.html файл
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot( // ссылка на DOM-элемент
  document.getElementById('root') as HTMLElement //при автогенерации линкуется блок с id=root, as HTMLElement - просто приведение типов typescript'ом, чтоб не ругался
);
root.render( //после рендере появится первоначальная картинка
  <React.StrictMode>
    <App /> {/* само приложение, формат jsx */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
