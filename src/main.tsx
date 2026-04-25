import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { init } from 'tsv-tracker';

const _tsvSiteId = import.meta.env.VITE_TSV_SITE_ID as string | undefined;
const _tsvApiKey = import.meta.env.VITE_TSV_API_KEY as string | undefined;
if (_tsvSiteId && _tsvApiKey) init({ siteId: _tsvSiteId, apiKey: _tsvApiKey });

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
