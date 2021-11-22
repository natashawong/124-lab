
import React from "react"
import { useState } from "react"
import { useCallback } from "react"

const TabTitle = ({ title, setSelectedTab, selectedTab, plusButtonClicked, index }) => {

    const onClick = useCallback(() => {
        setSelectedTab(index)
    }, [setSelectedTab, index])
    
    let className = 'tab-list-item';

    if (selectedTab === index) {
      className += ' tab-list-active';
    }

    // function onEdit(index) {
    //   return (e) => {
    //       setTodo( prevState => ({...prevState, [e.target.name] : e.target.value}))
    //       props.onEditData(e.target.value, index);
    //   }
    // }

      return (
        <div className = "tabs">
          {plusButtonClicked ?
          <input type='text' id={index} name={index} value={title} onClick={onClick} className={className}/>
          :
          <input type='text' id={index} name={index} value={title} onClick={onClick} readOnly className={className} style={{outline: "none"}}/>
          }
        </div>
      )
}

export default TabTitle