import React, { useEffect, useRef, useState } from 'react';

function List(props) {
    const searchInput = useRef(null);

    useEffect(()=>{
        searchInput.current.focus();
     },[])

    const filteredData = props.filterType === 'showCompleted' ? props.data : props.data.filter(item => !item.completed)

    function handleChange(e, index) {
        let isChecked = e.target.checked;
        props.setData(isChecked, index);
    }

    return(
        <div>
            {filteredData.map((item, i) => (
                <div className = "input" id={i}>
                <input type="checkbox" onChange={handleChange(e, index)}/>
                    {item.focus == true ? 
                        <input ref={searchInput} value={item.todo}/> :
                        <input value={item.todo} readOnly={true}/>
                    }
                </div>
            ))}
        </div>
    )
}

export default List;