
import './index.css';
import App from './App';
import { createRoot } from 'react-dom/client';
import CountClick from './components/CountClick';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<CountClick />);
