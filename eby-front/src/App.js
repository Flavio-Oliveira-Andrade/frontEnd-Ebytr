import React from 'react';
import Header from './components/Header';
import Todo from './components/Todo';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Header/>
        <p>
          Edit and save and write to Task
        </p>
        <Todo/>

      </header>
    </div>
  );
}

export default App;
