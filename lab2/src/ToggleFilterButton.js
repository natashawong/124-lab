import React from 'react';
// neede props: mode

function ToggleFilterButton(props) {

    const filterType = {
        showAll: "SHOW_ALL",
        showCompleted: "SHOW_COMPLETED",
    }

    const modeType = {
        add: "ADD",
        edit: "EDIT",
        base: "BASE",
      }

    return (
        <>
        {props.mode === modeType.edit && 
                <>
                    {props.filter === filterType.showAll ?
                    <button className="button showCompleted" onClick={props.setFilterType(filterType.showCompleted)}>Show Completed</button> : 
                    <button className="button showCompleted" onClick={props.setFilterType(filterType.showAll)}>Show All</button>
                    }
                    <button className="button deleteCompleted">Delete Completed</button> 
                </>
        }
        </>
    )
}

export default ToggleFilterButton;
