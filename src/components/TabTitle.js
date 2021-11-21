
import React from "react"
import { useState } from "react"
import { useCallback } from "react"

const TabTitle = ({ title, setSelectedTab, selectedTab, index }) => {

    const onClick = useCallback(() => {
        setSelectedTab(index)
    }, [setSelectedTab, index])
    
    let className = 'tab-list-item';

    if (selectedTab === index) {
      className += ' tab-list-active';
    }

      return (
        <div>
          <label>
          <input type='text' id={index} name={index} value={title} onClick={onClick} className={className}/>
          {/* <input type='text' className={className} onClick={onClick}>{title}</input> */}
          </label>
        </div>
      )
}

export default TabTitle