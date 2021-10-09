import React from 'react';
import List from './List';
import './styles.css';

function App() {
  const data = [
    {
      id: 1,
      todo: "Call mom",
      completed: true,
    },
    {
      id: 2,
      todo: "Eat lunch",
      completed: false,
    }
  ]

  return (
    <>
      <div className="body-container">
          <div className="title">
              <h1 className="underline">To-do list</h1>
          </div>
          <div className="buttons">
              <h1>Edit</h1>
              <h1>+</h1>
          </div>
      </div>
      <List data={data} filterType="showCompleted"/>
    </>
  );
}

export default App;
