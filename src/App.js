import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import Navbar from './component/Navbar/Navbar';
import Profile from './component/Profile/Profile';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='info'>
        <Navbar/>
        <Profile/>
      </div>
    </div>
  );
}

export default App;
