import React from "react";

function List(props) {
    const filteredData = props.filterType === 'showCompleted' ? props.data : props.data.filter(item => !item.completed)
    return(
        <div>
            {filteredData.map((item, i) => (
                <div className = "input" id={i}>
                    <input type="checkbox"/>
                    <label><h1>{item.todo}</h1></label>
                </div>
            ))}
        </div>
    )
}

export default List;