import React, { useEffect, useState } from 'react';
import List from './List';
import firebase from "firebase/compat";
import { useCollection } from "react-firebase-hooks/firestore";
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";

import './styles.css';
import {filterType, modeType, priorityType} from './Constants';

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

  const [query, setQuery] = useState(useCollection(collection));

  const [todoListData, setTodoListData] = useState([]);
  const [lastId, setLastId] = useState("");
  const [filter, setFilterType] = useState(filterType.showAll);
  const [mode, setMode] = useState(modeType.base);
  const [atLeastOneSelected, setAtLeastOneSelected ] = useState(false);

  useEffect(() => {
    let data = [];
    if (query) {
      data = query.docs.map((doc) => {
           return {...doc.data()}});
      setTodoListData(data);
    }
  }, [query])

  const useFetch = (query) => {
    const [value, loading, error] = useCollection(query);

    if (value) {
      let data = value.docs.map((doc) => {
        return {...doc.data()}});
      setTodoListData(data);
    }
  }

  function plusClicked() {
    // Adds an empty Todo
    const newId = generateUniqueID();
    collection.doc(newId).set({ id: newId, todo: "", completed: false, priority: 2});
    setLastId(newId);
    setMode(modeType.add);
  }
  
  function removeTodo(id) {
    collection.doc(id).delete();
  }

  function editTodo(newTodo, id) {
    // Edits an existing Todo
    let todoObj = {'id': id, 'todo': newTodo}
    collection.doc(id).update(todoObj);
  }

  function setCompleted(isCompleted, id) {
    // changes the state of completed
    let todoObj = {'id': id, 'completed': isCompleted}
    collection.doc(id).update(todoObj);
  }

  function doneClicked() {
    if (todoListData.length > 0 && todoListData[todoListData.length-1].todo === "") {removeTodo(lastId)}
    setMode(modeType.base);
  }

  function editClicked() {
    todoListData.map((item, i) => {
      if (item.completed) {setAtLeastOneSelected(true)}
    })
    setMode(modeType.edit);
  }

  function deleteSelected(personId) {
    todoListData.map((item, i) => {
      if (item.completed) {removeTodo(item.id)}
    })
  }

  function handleSortChange(e) {
    const sortType = e.target.value;
    const sortQuery = collection.orderBy(sortType, 'asc');
    setQuery(useCollection(sortQuery));
  }

  return (
    <div>
    {query.loading && <h1>Loading</h1>}
    {todoListData && <>
      <div className="buttons">
        <div>
            <select name="dropdown" className="mainDropdown" onChange={handleSortChange}>
              <option value="priority">Priority</option>
              <option value="todo">Name</option>
              <option value="creation_date">Creation Date</option>
            </select>
        </div>

        <div>
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
      </div>
      <div className="body-container">
          <div className="title">
              <h1 className="underline">To-do list</h1>
          </div>
      </div>
      <List
        data={todoListData} 
        filterType={filter}
        onSetData={(isComplete, index) => {
          setCompleted(isComplete, index)
        }}
        onEditData={(newTodo, index) => {
          editTodo(newTodo, index);
        }}
        mode={mode}
        lastId={lastId}
      />

      <div className="footer">
          {filter === filterType.hideCompleted && atLeastOneSelected ? 
            <button className="button showCompleted" onClick={() => setFilterType(filterType.showAll)}>Show All</button> :
            <button className="button showCompleted" onClick={() => setFilterType(filterType.hideCompleted)}>Hide Completed</button>
          }
          <button className="button deleteCompleted" onClick={deleteSelected}>Delete Completed</button> 
      </div>
    </>
          }
    </div>
  );
}

export default App;
