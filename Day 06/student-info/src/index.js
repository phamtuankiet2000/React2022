
import './index.css';
import App from './App';
import React from './React';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container);
root.gender(<App />);
