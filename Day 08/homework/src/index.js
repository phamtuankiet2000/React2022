import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createRoot } from 'react-dom/client';
import Timer from './components/Timer';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Timer />);



