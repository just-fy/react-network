import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const dialogUsers = [
    {name: 'Katya Smirnova', id: 1},
    {name: 'Nastya Faizulina', id: 2},
    {name: 'Olya Ivanova', id: 3},
    {name: 'Vika Retyr', id: 4},
    {name: 'Sanya Lo', id: 5},
];
const messages = [
    {message: 'Hello', id: 1},
    {message: 'Hi, how are u?', id: 2},
    {message: 'I\'m fine', id: 3},
    {message: 'Thank you', id: 4},
    {message: 'I go home', id: 5},
];
const posts = [
    {name: 'Elena Voronina', id: 1, post: 'Hello', date: '4 Dec 2018'},
    {name: 'Nastya Faizulina', id: 2, post: 'Hi', date: '23 Sep 2015'},
    {name: 'Olesya Purova', id: 3, post: 'Bye', date: '7 Dec 2015'},
    {name: 'Katya Popova', id: 4, post: 'I am fine', date: '3 Dec 2011'},
    {name: 'Katya Popova', id: 4, post: 'I am fine', date: '3 Dec 2011'},
];

ReactDOM.render(<App dialogUsers={dialogUsers} messages={messages} posts={posts} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
