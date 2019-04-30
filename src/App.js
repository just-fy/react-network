import React from 'react';
import './App.css';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";

function App() {
  return (
      <div className="page-wrapper">
          <Header />
          <div className='page-layout'>
              <Navbar />
              <Profile />
          </div>
      </div>
  );
}

export default App;
