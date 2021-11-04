import React, { useState } from 'react';
import {filterType} from './Constants';

function List(props) {
    const filteredData = props.filterType === filterType.hideCompleted ? props.data.filter(item => !item.completed) : props.data
    // console.log('in List', filteredData.map((item, i) => (console.log(item))));
    const [todo, setTodo] = useState({});
    const [checked, setChecked] = useState({});
    
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

    return(
        <div>
            {filteredData.map((item, i) => (
                <div className = "input" key={i}>
                <input type="checkbox" id={item.id} name={i} disabled={props.mode === "EDIT"} checked={item.completed} onChange={handleChange(item.id)}/>
                    {props.mode === "EDIT" ? 
                        <input id={item.id} name={i} value={item.todo} onChange={onEdit(item.id)}/> :
                    (props.mode === "ADD" && item.id === props.lastId) ?
                        <input id={item.id} name={i} value={item.todo} onChange={onEdit(item.id)}/> :
                        <input id={item.id} name={i} value={item.todo} readOnly/>
                    }
                </div>
            ))}
        </div>
    )
}

export default List;