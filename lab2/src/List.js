import React, { useEffect, useState } from 'react';

const filterType = {
    showAll: "SHOW_ALL",
    hideCompleted: "HIDE_COMPLETED",
  }

function List(props) {
    const filteredData = props.filterType === filterType.hideCompleted ? props.data.filter(item => !item.completed) : props.data
    const [todo, setTodo] = useState({})
    
    function handleChange(index) {
        return (e) => {
            let isChecked = e.target.checked;
            props.setData(isChecked, index);
        }
    }

    function onEdit(index) {
        return (e) => {
            setTodo( prevState => ({...prevState, [e.target.name] : e.target.value}))
            props.editData(e.target.value, index);
        }
    }

    return(
        <div>
            {filteredData.map((item, i) => (
                <div className = "input" key={i}>
                <input type="checkbox" id={i} name={i} disabled={props.mode === "EDIT"} onChange={handleChange(i)}/>
                    {props.mode === "EDIT" ? 
                        <input id={i} name={i} value={todo.i} onChange={onEdit(i)}/> :
                    (props.mode === "ADD" && i === filteredData.length-1) ?
                        <input id={i} name={i} value={todo.i} onChange={onEdit(i)}/> :
                        <input id={i} name={i} value={item.todo} readOnly/>
                    }
                </div>
            ))}
        </div>
    )
}

export default List;