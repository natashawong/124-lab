import React, { useState } from 'react';
import {filterType} from './Constants';

export default function List(props) {
    const filterDataByList = props.data.filter(item => item.list === props.currList);
    const filteredData = props.filterType === filterType.hideCompleted ? filterDataByList.filter(item => !item.completed) : filterDataByList

    const [todo, setTodo] = useState({});
    const [checked, setChecked] = useState({});
    const [priorityLevel, setPriorityLevel] = useState({});
    
    function handleChange(index) {
        return (e) => {
            let isChecked = e.target.checked;
            setChecked( prevState => ({...prevState, [e.target.name] : e.target.checked}))
            props.onSetData(isChecked, index);
        }
    }

    function onEdit(index) {
        return (e) => {
            setTodo( prevState => ({...prevState, [e.target.name] : e.target.value}))
            props.onEditData(e.target.value, index);
        }
    }

    function handlePriorityChange(index) {
        return (e) => {
            setPriorityLevel( prevState => ({...prevState, [e.target.name] : e.target.value}))
            props.onChangePriority(e.target.value, index);
        }
    }

    function deleteAllCompleted() {
        const toDelete = filteredData.filter(todo => todo.completed);
        for (let i = 0; i < toDelete.length; i++) {
            console.log(toDelete[i].id);
            props.onRemoveTodo(toDelete[i].id);
        }
    }

    function deleteList() {
        for (let i = 0; i < filteredData.length; i++) {
            props.onRemoveTodo(filteredData[i].id);
        }
    }

    return(
        <div>
            {filteredData.map((item, i) => (
                <div className="container">
                    <div key={i}>
                        <div className= "list">
                        <div className="checkboxAndInputContainer">
                            {/* checkbox */}
                            <input type="checkbox" id={item.id} name={i} disabled={props.mode === "EDIT"} checked={item.completed} onChange={handleChange(item.id)} class='regular-checkbox'/>

                            {/* text input/todo itself */}
                            {props.mode === "EDIT" ? 
                                <input type='text' id={item.id} name={i} value={item.todo} onChange={onEdit(item.id)} className="todoTextInput"/> :
                            (props.mode === "ADD" && item.id === props.lastId) ?
                                <input type='text' id={item.id} name={i} value={item.todo} onChange={onEdit(item.id)} className="todoTextInput"/> :
                                <input type='text' id={item.id} name={i} value={item.todo} readOnly className="todoTextInput" style={{outline: "none"}}/>
                            }   
                        </div>

                        {/* list dropdown */}
                        <select name="listDropdown"className="listDropdown" onChange={handlePriorityChange(item.id)}>
                            <option aria-label="high priority" value="1" selected={item.priority === "1"}>High</option>
                            <option aria-label="medium priority" value="2" selected={item.priority === "2"}>Medium</option>
                            <option aria-label="low priority" value="3" selected={item.priority === "3"}>Low</option>
                        </select>
                        </div>

                    </div>
                </div>
            ))}

            <div className="footer">
                {filteredData.filter(i => i.completed).length > 0 && 
                    <div>
                    {props.onShowAll}
                    <button aria-label="Delete completed items" className="button deleteCompleted" onClick={deleteAllCompleted}>Delete Completed</button> 
                    </div>
                }
                <div>
                    <button aria-label="Delete entire list" className="button deleteCompleted" onClick={deleteList}>Delete List</button> 
                </div>
            </div>
        </div>
    )
}