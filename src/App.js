import './App.css';
import Navbar from './components/navbar';
import Router from './components/Router';
import {BrowserRouter} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
      <Router/>
      </BrowserRouter>
    </div>
  );
}

export default App;
