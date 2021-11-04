import React, { useState } from 'react';
import List from './List';
import firebase from "firebase/compat";
import { useCollection } from "react-firebase-hooks/firestore";
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";
import { map } from '@firebase/util';

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
  const [value, loading, error] = useCollection(collection);

  const [lastId, setLastId] = useState("");
  const [filter, setFilterType] = useState(filterType.showAll);
  const [mode, setMode] = useState(modeType.base);
  const [atLeastOneSelected, setAtLeastOneSelected ] = useState(false);
  const [priority, setPriority] = useState(priorityType.med);

  let data = null;
  if (value) {
    data = value.docs.map((doc) => {
         return {...doc.data()}});
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

  function sortingByName() {
    const ordered = collection.orderBy('todo', 'asc');
    console.log(ordered.collection)
  }

  function sortingByPriority() {
    collection.orderBy('priority', 'asc');
  }

  //https://www.freecodecamp.org/news/how-to-create-a-dropdown-menu-with-css-and-javascript/

  // function toggleClass(elem,className){
  //   if (elem.className.indexOf(className) !== -1){
  //     elem.className = elem.className.replace(className,'');
  //   }
  //   else{
  //     elem.className = elem.className.replace(/\s+/g,' ') + 	' ' + className;
  //   }
  
  //   return elem;
  // }


  // function toggleDisplay(elem){
  //   const curDisplayStyle = elem.style.display;			
  
  //   if (curDisplayStyle === 'none' || curDisplayStyle === ''){
  //     elem.style.display = 'block';
  //   }
  //   else{
  //     elem.style.display = 'none';
  //   }
  
  // }
  
  // function toggleMenuDisplay(e){
  //   const dropdown = e.currentTarget.parentNode;
  //   const menu = dropdown.querySelector('.menu');
  //   const icon = dropdown.querySelector('.fa-angle-right');
  
  //   toggleClass(menu,'hide');
  //   toggleClass(icon,'rotate-90');
  // }
  
  // function handleOptionSelected(e){
  //   toggleClass(e.target.parentNode, 'hide');			
  
  //   const id = e.target.id;
  //   const newValue = e.target.textContent + ' ';
  //   const titleElem = document.querySelector('.dropdown .title');
  //   const icon = document.querySelector('.dropdown .title .fa');
  
  
  //   titleElem.textContent = newValue;
  //   titleElem.appendChild(icon);
  
  //   //trigger custom event
  //   document.querySelector('.dropdown .title').dispatchEvent(new Event('change'));
  //     //setTimeout is used so transition is properly shown
  //   setTimeout(() => toggleClass(icon,'rotate-90',0));
  // }
  
  // function handleTitleChange(e){
  //   const result = document.getElementById('result');
  
  //   result.innerHTML = 'The result is: ' + e.target.textContent;
  // }
  // //get elements
  // const dropdownTitle = document.querySelector('.dropdown .title');
  // const dropdownOptions = document.querySelectorAll('.dropdown .option');

  // //bind listeners to these elements

  // if (dropdownTitle){dropdownTitle.addEventListener('click', toggleMenuDisplay);}
  // dropdownOptions.forEach(option => option.addEventListener('click',handleOptionSelected));
  // if (document.querySelector('.dropdown .title')) {document.querySelector('.dropdown .title')}

  return (
    <div>
    {loading && <h1>Loading</h1>}
    {data && <>
      {/* <div class="dropdown">
		        <div class='title pointerCursor'>Select an option <i class="fa fa-angle-right"></i></div>
                <div class='menu pointerCursor hide'>
                      <div class='option' id='option1'>Priority</div>
                      <div class='option' id='option2'>Name</div>
                      <div class='option' id='option3'>Creation Date</div>
                  </div>
              </div> */}
      <div className="buttons">
          {(mode === modeType.add || mode === modeType.edit) ? 
                (<button className="button doneButton" onClick={doneClicked}>Done</button>)
              :
              (
                <>
                <button className="button editButton" onClick={editClicked}>Edit</button>
                <button className="button plusButton" onClick={plusClicked}>+</button> 
                <button className="button plusButton" onClick={sortingByName}>Sort name</button> 
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
          setCompleted(isComplete, index)
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
