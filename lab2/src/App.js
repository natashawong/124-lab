import React, { useRef, useState } from 'react';
import List from './List';
import './styles.css';

function App() {
  const initialData = [
    {
      id: 1,
      todo: "Call mom",
      completed: true,
      focus: false,
    },
    {
      id: 2,
      todo: "Eat lunch",
      completed: false,
      focus: true,
    }
  ]

  const [data, setData] = useState(initialData);
  const [adding, setAdding] = useState(false);
  const [editing, setEditing] = useState(false);

  function plusClicked() {
      let newId = data.length;
      let newData = data;

      newData.push({
          id: newId,
          todo: "",
          completed: false,
          focus: true,
      })

      setData(newData);
      setAdding(true);
  }

  function doneClicked() {
    let newData = data;
    data[data.length-1].todo === "" && newData.pop()

    setData(newData);
    setEditing(false);
    setAdding(false);
  }

  return (
    <>
      <div className="body-container">
          <div className="title">
              <h1 className="underline">To-do list</h1>
          </div>
          <div className="buttons">
              {adding || editing ? 
                  (<button onClick={doneClicked}>Done</button>)
                  : 
                  (
                    <>
                    <button onClick={() => setEditing(true)}>Edit</button>
                    <button onClick={plusClicked}>+</button> 
                    </>
                  )
              }
          </div>
      </div>
      <List
        data={data} 
        filterType="showCompleted"
        setData={(isComplete, index) => {
          let newData = data;
          newData[index].completed = isComplete;
          setData(newData);
          console.log('new data change complete' + newData)
        }}
      />
    </>
  );
}

export default App;
