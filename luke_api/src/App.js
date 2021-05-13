import './App.css';
import Details from './components/Details';
import Search from './components/Search';
import {Router} from '@reach/router';

function App() {
  return (
    <div className="App">
      <Search></Search>

    <Router>
      <Details path="/:category/:id"></Details>
    </Router>      
    </div>
  );
}

export default App;
