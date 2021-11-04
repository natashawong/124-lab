import React, { useState } from 'react';
import {filterType} from './Constants';

export default function List(props) {
    console.log("props.data" + JSON.stringify(props.data))
    const filteredData = props.filterType === filterType.hideCompleted ? props.data.filter(item => !item.completed) : props.data
    // console.log('in List', filteredData.map((item, i) => (console.log(item))));
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
            // props.onSetData(e.target.value, index);
        }
    }

    // TODO: fix UI, add props ^^ above similar to "onEditData" to update the collection priority levels

    return(
        <div>
            {filteredData.map((item, i) => (
                <div className="container">
                    <div className = "input" key={i}>
                    <input type="checkbox" id={item.id} name={i} disabled={props.mode === "EDIT"} checked={item.completed} onChange={handleChange(item.id)} class='regular-checkbox'/>
                        {props.mode === "EDIT" ? 
                            <input type='text' id={item.id} name={i} value={item.todo} onChange={onEdit(item.id)}/> :
                        (props.mode === "ADD" && item.id === props.lastId) ?
                            <input type='text' id={item.id} name={i} value={item.todo} onChange={onEdit(item.id)}/> :
                            <input type='text' id={item.id} name={i} value={item.todo} readOnly/>
                        }   
                    <select name="listDropdown" className="listDropdown" onChange={handlePriorityChange(item.id)}>
                        <option value="high">High</option>
                        <option value="med">Medium</option>
                        <option value="low">Low</option>
                    </select>
                    </div>
                </div>
            ))}
        </div>
    )
}