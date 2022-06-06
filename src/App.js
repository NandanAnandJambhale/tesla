import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Nandan1 from './components/Nandan1';
import Nandan2 from './components/Nandan2';
import Nandan3 from './components/Nandan3';
import Nandan4 from './components/Nandan4';
function App() {
  return (
    <div className="App">
     <Header/> 
     <Home/>
     <Nandan1/>
     <Nandan2/>
     <Nandan3/>
     <Nandan4/>
    </div>
  );
}

export default App;