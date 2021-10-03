import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TextField } from './TextField';

function App(): React.FC = () => {
  return <div>
    <TextField text='hello' person={{firstName: 'Zesty', lastName: 'Nesty'}} />
  </div>;
};

export default App;
