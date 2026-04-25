import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { init } from 'tsv-tracker';

init({ siteId: 'tsv_bf56267b3059', apiKey: 'TSV-b6e59fef62fe0122feb38668c3c8ed405965c478e009132d' });

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
