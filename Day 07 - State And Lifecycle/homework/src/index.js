import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App1 from './components/Introduce';
import App2 from './components/Calculator';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App2 />);





