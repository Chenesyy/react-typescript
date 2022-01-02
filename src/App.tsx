import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Landing from './components/Landing/Landing';
import About from './components/About/About';

const App: React.FC = () => {
  return (
    <div className='App'>
      <section className="header">
        <Header />
      </section>
      <section className="landing">
        <Landing />
      </section>
      <section className="about">
        <About />
      </section>
    </div>
  );
};

export default App;
