import React from 'react';
import './App.css';

import MyNewComponent from "./components/MyNewComponent";

function App() {
  return (
    <div className="App">
      <MyNewComponent firstName="Jane" lastName="Doe" age={45} hairColor="Black"/>
      <MyNewComponent firstName="John" lastName="Smith" age={88} hairColor="Brown"/>
      
    </div>
  );
}

export default App;

