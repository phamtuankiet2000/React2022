
import { createRoot } from 'react-dom/client';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import FormFC from './components/FormFC';
import InputFC from './components/InputFunctionalComp';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<FormFC />);

