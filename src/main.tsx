import { StrictMode, Component, type ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

class ErrorBoundary extends Component<{children:ReactNode},{hasError:boolean}> {
  state={hasError:false};
  static getDerivedStateFromError(){return {hasError:true};}
  render(){return this.state.hasError?<main className="min-h-screen grid place-items-center p-6 text-center"><div><h1 className="font-antonio text-5xl font-bold uppercase">Something went wrong.</h1><p className="mt-3 text-neutral-600">Please refresh the page and try again.</p><button className="mt-6 rounded-full bg-black px-6 py-3 text-white" onClick={()=>window.location.reload()}>Refresh</button></div></main>:this.props.children;}
}
createRoot(document.getElementById('root')!).render(<StrictMode><ErrorBoundary><App /></ErrorBoundary></StrictMode>);
