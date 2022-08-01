import logo from './logo.svg';
import './App.css';

import AddComponents from './components/Add';
import Welcome from './components/Welcome';

function App() {
  return (
    // <div className="container">
    //   <AddComponents firtsNumber={1} secondNumber={2} />
    // </div>
    <div className="App">
      <Welcome name="Admin" />
    </div>
  );
}

export default App;
