import React, { useEffect, useRef } from 'react';

function List(props) {
    const searchInput = useRef(null);

    // useEffect(()=>{
    //     searchInput.current.focus();
    //  },[])

    const filteredData = props.filterType === 'showCompleted' ? props.data : props.data.filter(item => !item.completed)

    function handleChange(e, index) {
        console.log("index" + index);
        let isChecked = e.target.checked;
        props.setData(isChecked, index);
    }

    return(
        <div>
            {filteredData.map((item, i) => (
                <div className = "input" id={i}>
                <input type="checkbox" onChange={(i) => handleChange(i)}/>
                    {item.focus ?
                        <input ref={searchInput} value={item.todo}/> :
                        <input value={item.todo} readOnly={true}/>
                    }
                </div>
            ))}
        </div>
    )
}

export default List;