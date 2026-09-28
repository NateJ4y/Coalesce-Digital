import { StrictMode, Component, type ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

interface ErrorBoundaryProps { children: ReactNode }
interface ErrorBoundaryState { hasError: boolean }

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  declare readonly props: ErrorBoundaryProps;
  state: ErrorBoundaryState = { hasError: false };
  static getDerivedStateFromError(): ErrorBoundaryState { return { hasError: true }; }
  render() {
    if (this.state.hasError) {
      return <main className="min-h-screen grid place-items-center p-6 text-center"><div><h1 className="font-antonio text-5xl font-bold uppercase">Something went wrong.</h1><p className="mt-3 text-neutral-600">Please refresh the page and try again.</p><button className="mt-6 rounded-full bg-black px-6 py-3 text-white" onClick={() => window.location.reload()}>Refresh</button></div></main>;
    }
    return this.props.children;
  }
}

createRoot(document.getElementById('root')!).render(<StrictMode><ErrorBoundary><App /></ErrorBoundary></StrictMode>);
