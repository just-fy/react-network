import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Messages from './components/Messages/Messages';

function App() {
  return (
      <div className="page-wrapper">
          <Header />
          <div className='page-layout'>
              <Navbar />
              <Profile />
              <Messages />
          </div>
      </div>
  );
}

export default App;
