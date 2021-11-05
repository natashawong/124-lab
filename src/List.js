import React, { useState } from 'react';
import {filterType} from './Constants';

export default function List(props) {
    const filteredData = props.filterType === filterType.hideCompleted ? props.data.filter(item => !item.completed) : props.data
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

    return(
        <div>
            {filteredData.map((item, i) => (
                <div className="container">
                    <div className = "input" key={i}>
                    <input type="checkbox" id={item.id} name={i} disabled={props.mode === "EDIT"} checked={item.completed} onChange={handleChange(item.id)} class='regular-checkbox'/>
                        {props.mode === "EDIT" ? 
                            <input type='text' id={item.id} name={i} value={item.todo} onChange={onEdit(item.id)} className="todoTextInput"/> :
                        (props.mode === "ADD" && item.id === props.lastId) ?
                            <input type='text' id={item.id} name={i} value={item.todo} onChange={onEdit(item.id)} className="todoTextInput"/> :
                            <input type='text' id={item.id} name={i} value={item.todo} readOnly className="todoTextInput"/>
                        }   
                    <select name="listDropdown"className="listDropdown" onChange={handlePriorityChange(item.id)}>
                        <option value="1" selected={item.priority === "1"}>High</option>
                        <option value="2" selected={item.priority === "2"}>Medium</option>
                        <option value="3" selected={item.priority === "3"}>Low</option>
                    </select>
                    </div>
                </div>
            ))}
        </div>
    )
}