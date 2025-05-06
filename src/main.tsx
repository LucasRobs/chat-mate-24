
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { initHotjar } from './utils/hotjar';

// Initialize Hotjar
initHotjar();

createRoot(document.getElementById("root")!).render(<App />);
