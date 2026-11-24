import React from 'react';
import ReactDOM from 'react-dom/client';
import '@fontsource-variable/anybody/wdth.css';
import '@fontsource-variable/archivo/wdth.css';
import '../index.css';
import './health.css';
import PressCheck from './PressCheck';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PressCheck />
  </React.StrictMode>,
);
