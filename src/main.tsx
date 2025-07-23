import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { withSentryErrorLogging } from './hoc/withSentryErrorLogging';
import * as Sentry from '@sentry/react';
import './index.css'
import App from './App.tsx';

const enableSentry = import.meta.env.VITE_ENABLE_SENTRY === 'true';

let AppComponent = enableSentry ? withSentryErrorLogging(App) : App

if (enableSentry) {
  Sentry.init({
    dsn: import.meta.env.VITE_SENTRY_DSN,
    sendDefaultPii: true,
    // ...other options
  });
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppComponent />
  </StrictMode>,
)
