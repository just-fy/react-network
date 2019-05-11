import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Messages from './components/Messages/Messages';
import Footer from './components/Footer/Footer';
import News from "./components/News/News";
import Photos from "./Photos/Photos";
import {BrowserRouter, Route} from "react-router-dom";



function App() {
    return (
        <BrowserRouter>
            <div className="page-wrapper">
                <Header/>
                <Navbar/>
                <main className='page-main'>
                    <Route path='/profile' component={Profile} />
                    <Route path='/messages' component={Messages} />
                    <Route path='/news' component={News} />
                    <Route path='/photos' component={Photos} />
                </main>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
