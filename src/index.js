//Import the React and ReactDOM as libraries
import React from 'react';
import ReactDOM from 'react-dom';

//Create a React component
const App = () => {
    return <div>Hi there!</div>;
}

//Take the React component & show it on the screen
ReactDOM.render(
    <App />, 
    document.querySelector('#root')
);