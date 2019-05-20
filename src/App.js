import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/LeftSidebar/Navbar";
import Profile from "./components/Navbar/Profile/MyProfile/Profile";
import Messages from './components/Navbar/Messages/Messages';
import Footer from './components/Footer/Footer';
import News from "./components/Navbar/News/News";
import Photos from "./components/Navbar/Photos/Photos";
import {BrowserRouter, Route} from "react-router-dom";

function App(props) {
    return (
        <BrowserRouter>
            <div className="page-wrapper">
                <Header />
                <Navbar />
                <main className='page-content'>
                    <Route path='/profile' render={ () => <Profile posts={props.posts} /> } />
                    <Route path='/messages' render={ () => <Messages messages={props.messages} dialogUsers={props.dialogUsers} /> } />
                    <Route path='/news' render={ () => <News />} />
                    <Route path='/photos' render={ () => <Photos />} />
                </main>
                {/*<Footer />*/}
            </div>
        </BrowserRouter>
    );
}

export default App;