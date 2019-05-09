import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Messages from './components/Messages/Messages';
import Footer from  './components/Footer/Footer';

function App() {
  return (
      <div className="page-wrapper">
          <Header />
          <Navbar />
          <main className='page-main'>
              <Profile />
              <Messages />
          </main>
          <Footer />
      </div>
  );
}

export default App;
