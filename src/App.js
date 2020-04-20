import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import Navbar from './component/Navbar/Navbar';
import Profile from './component/Profile/Profile';
import Messages from './component/Messages/Messages';
import { Route, BrowserRouter } from 'react-router-dom';
import state from './Redux/state';


function App() {
  
  return (
    
    <BrowserRouter>
    <div className="App">
      <Header/>
      <div className='info'>
        
        <Navbar/>
        <Route path='/profile' render={() => <Profile
        state={state}
        />} />
        <Route path='/messages' render={() => <Messages
         state={state}
        />} />
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
