import React, { useState } from 'react';
import List from './List';
import firebase from "firebase/compat";
import { useCollection } from "react-firebase-hooks/firestore";
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";
import { map } from '@firebase/util';

import './styles.css';
import {filterType, modeType} from './Constants';

const firebaseConfig = {
  apiKey: "AIzaSyATi5uqr6dkf4iTvqfPHndGwtHXz0O6O-s",
  authDomain: "lab-90286.firebaseapp.com",
  databaseURL: "https://lab-90286-default-rtdb.firebaseio.com",
  projectId: "lab-90286",
  storageBucket: "lab-90286.appspot.com",
  messagingSenderId: "782831139249",
  appId: "1:782831139249:web:2d846e81abb155eeece590",
  measurementId: "G-YTZ7W2BRD9"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

function App() {
  const collection = db.collection('natasha-bettina-124');
  console.log(collection);
  const [value, loading, error] = useCollection(collection);
  const initialData = value ? value : [{}];

  const [data, setData] = useState(initialData);
  const [filter, setFilterType] = useState(filterType.showAll);
  const [mode, setMode] = useState(modeType.base);
  const [atLeastOneSelected, setAtLeastOneSelected ] = useState(false);

  function addTodo() {
    // Adds an empty Todo
    const newId = generateUniqueID();
    console.log(newId);
    console.log("coll", collection.doc(newId));
    collection.doc(newId).set({ id: newId, todo: "", completed: false});
    console.log(value);
  }

  function removeTodo(id) {
    collection.doc(id).delete();
  }

  function editTodo(todoObj) {
    // Edits an existing Todo
    // todoObj is {id:..., todo:..., completed:..}
    collection.doc(todoObj.id).update(todoObj);
  }

  function plusClicked() {
      // let newData = data;

      // newData.push({
      //     id: latestId,
      //     todo: "",
      //     completed: false,
      // })
      // let newId = latestId + 1;
      // setLatestId(newId);

      // setData(newData);
      addTodo();
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
