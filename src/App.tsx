import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Landing from './components/Landing/Landing';
import About from './components/About/About';
import Routes from './container/Routes';

const App: React.FC = () => {
  return (
    <div className='App'>
        <Routes />
    </div>
  );
};

export default App;
