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
  const [value, loading, error] = useCollection(collection);

  const [lastId, setLastId] = useState("");
  const [filter, setFilterType] = useState(filterType.showAll);
  const [mode, setMode] = useState(modeType.base);
  const [atLeastOneSelected, setAtLeastOneSelected ] = useState(false);

  let data = null;
  if (value) {
    data = value.docs.map((doc) => {
         return {...doc.data()}});
  }

  function plusClicked() {
    // Adds an empty Todo
    const newId = generateUniqueID();
    console.log(newId);
    collection.doc(newId).set({ id: newId, todo: "", completed: false});
    setLastId(newId);
    setMode(modeType.add);
  }
  
  function removeTodo(id) {
    collection.doc(id).delete();
  }

  function editTodo(newTodo, id) {
    // Edits an existing Todo
    let todoObj = {id: id, todo: newTodo, completed: false}
    collection.doc(id).update(todoObj);
  }
  
  function doneClicked() {
    console.log(lastId);
    console.log('donedata ', data);
    if (data.length > 0 && data[data.length-1].todo === "") {removeTodo(lastId)}
    setMode(modeType.base);
  }

  function editClicked() {
    data.map((item, i) => {
      if (item.completed) {setAtLeastOneSelected(true)}
    })
    setMode(modeType.edit);
  }

  function deleteSelected(personId) {
    data.map((item, i) => {
      if (item.completed) {removeTodo(item.id)}
    })
  }

  return (
    <div>
    {loading && <h1>Loading</h1>}
    {data && <>
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
        onSetData={(isComplete, index) => {
          data[index].completed = isComplete;
        }}
        onEditData={(newTodo, index) => {
          editTodo(newTodo, index);
        }}
        mode={mode}
        lastId={lastId}
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
          }
    </div>
  );
}

export default App;
