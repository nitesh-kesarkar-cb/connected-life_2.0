import React from 'react';
import * as Sentry from '@sentry/react';

// Abstract error reporting function
// Replace this with any error reporting service in future
function reportError(error: Error, errorInfo: React.ErrorInfo) {
  if (import.meta.env.NODE_ENV === 'production') {
    // Log error to Sentry in production only
    Sentry.captureException(error, { extra: errorInfo } as any);
  } else {
    // In non-production, just log to the console for debugging
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    reportError(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
