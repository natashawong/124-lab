import React, { useEffect, useRef, useState } from 'react';
import List from './List';
import ToggleFilterButton from './ToggleFilterButton';
import './styles.css';

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

  const filterType = {
    showAll: "SHOW_ALL",
    showCompleted: "SHOW_COMPLETED",
  }

  const modeType = {
    add: "ADD",
    edit: "EDIT",
    base: "BASE",
  }

  const [data, setData] = useState(initialData);
  const [filter, setFilterType] = useState(filterType.showAll);
  const [mode, setMode] = useState(modeType.base);

  function plusClicked() {
      let newId = data.length;
      let newData = data;

      newData.push({
          id: newId,
          todo: "",
          completed: false,
      })

      setData(newData);
      setMode(modeType.add);
  }

  function doneClicked() {
    let newData = data;
    data[data.length-1].todo === "" && newData.pop()

    setData(newData);
    setMode(modeType.base);
  }

  return (
    <>
      <div className="buttons">
          {(mode === modeType.add || mode === modeType.edit) ? 
                (<button className="button doneButton" onClick={doneClicked}>Done</button>)
              :
              (
                <>
                <button className="button editButton" onClick={() => setMode(modeType.edit)}>Edit</button>
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

      {console.log(data)}
      {/* TODO: delete completed + toggle show completed and show all */}

      <div className="footer">
              {mode === modeType.edit && 
                <> 
                  <button className="button deleteSelected">Delete Selected</button>
                  <button className="button showCompleted" onClick={() => setFilterType(filterType.showCompleted)}>Hide Completed</button>
                  <button className="button deleteCompleted">Delete Completed</button> 
                </>}
                {/* <ToggleFilterButton
                  filter={filter}
                  setFilterType={(filterT) => setFilterType(filterT)}
                  mode={mode}
                /> */}
      </div>
    </>
  );
}

export default App;
