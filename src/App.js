import React, { useState } from 'react';
import List from './List';

import './styles.css';
import {filterType, modeType} from './Constants';

function App() {
  const initialData = [
    {
      id: 1,
      todo: "Call mom",
      completed: false,
    },
    {
      id: 2,
      todo: "Eat lunch",
      completed: false,
    }
  ]

  const [data, setData] = useState(initialData);
  const [filter, setFilterType] = useState(filterType.showAll);
  const [mode, setMode] = useState(modeType.base);
  const [atLeastOneSelected, setAtLeastOneSelected ] = useState(false);
  const [latestId, setLatestId] = useState(3);

  function plusClicked() {
      let newData = data;

      newData.push({
          id: latestId,
          todo: "",
          completed: false,
      })
      let newId = latestId + 1;
      setLatestId(newId);

      setData(newData);
      setMode(modeType.add);
  }

  function doneClicked() {
    let newData = data;
    if (data.length > 1) {data[data.length-1].todo === "" && newData.pop()}

    setData(newData);
    setMode(modeType.base);
  }

  function editClicked() {
    data.map((item, i) => {
      if (item.completed) {setAtLeastOneSelected(true)}
    })
    setMode(modeType.edit);
  }

  function deleteSelected() {
    let newData = data.filter((item) => !item.completed)
    newData.map((item, i) => {
      item.completed = false;
    })
    setData(newData);
    console.log(newData);
  }

  return (
    <>
      <div className="buttons">
          {(mode === modeType.add || mode === modeType.edit) ? 
                (<button className="button doneButton" onClick={doneClicked}>Done</button>)
              :
              (
                <>
                <button className="button editButton" onClick={editClicked}>Edit</button>
                <button className="button plusButton" onClick={plusClicked}>+</button> 
                </>
              )
          }
      </div>
      <div className="body-container">
          <div className="title">
              <h1 className="underline">To-do list</h1>
          </div>
      </div>

      <List
        data={data} 
        filterType={filter}
        setData={(isComplete, index) => {
          let newData = data;
          newData[index].completed = isComplete;
          setData(newData);
        }}
        editData={(newTodo, index) => {
          let newData = data;
          newData[index].todo = newTodo;
          setData(newData);
        }}
        mode={mode}
      />

      <div className="footer">
        {mode === modeType.edit && 
          <>
            {filter === filterType.hideCompleted && atLeastOneSelected ? 
              <button className="button showCompleted" onClick={() => setFilterType(filterType.showAll)}>Show All</button> :
              <button className="button showCompleted" onClick={() => setFilterType(filterType.hideCompleted)}>Hide Completed</button>
            }
            <button className="button deleteCompleted" onClick={deleteSelected}>Delete Completed</button> 
          </>}
      </div>
    </>
  );
}

export default App;
