import './App.css';
import {Router} from '@reach/router';
import HomePage from './components/HomePage';
import NumberPage from './components/NumberPage';
import ColorsPage from './components/ColorsPage';

function App() {
  return (
    <div className="App">
      <Router>
      <HomePage path="/home"></HomePage>
      <NumberPage path="/:something"></NumberPage>
      <ColorsPage path="/:something/:color1/:color2"></ColorsPage>
      </Router>
    </div>
  );
}

export default App;
