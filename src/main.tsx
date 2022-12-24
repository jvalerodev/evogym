import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import SelectedPageState from '@/context/selectedPage/state';

import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <SelectedPageState>
      <App />
    </SelectedPageState>
  </React.StrictMode>
);
