import * as Sentry from '@sentry/react';
import React from 'react';

// You can swap Sentry.ErrorBoundary for any other error boundary in the future
export function withSentryErrorLogging<P extends React.PropsWithChildren<{}>>(Component: React.ComponentType<P>) {
  return function WrappedWithSentryErrorLogging(props: P) {
    return (
      <Sentry.ErrorBoundary fallback={<div>Something went wrong.</div>}>
        <Component {...props} />
      </Sentry.ErrorBoundary>
    );
  };
}