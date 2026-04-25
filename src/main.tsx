import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { init } from 'tsv-tracker';

init({ siteId: 'tsv_bf56267b3059', apiKey: 'TSV-42c3bfa19074c0ea2397909e77b20fb4e0c8deadde579a49' });

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
