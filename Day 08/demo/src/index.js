import React from 'react';
import './index.css';
import App from './App';
import { createRoot } from 'react-dom/client';
import Click from './components/Click';
import 'bootstrap/dist/css/bootstrap.min.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Click />);

