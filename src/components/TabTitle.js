
import React from "react"
import { useState } from "react"
import { useCallback } from "react"

const TabTitle = ({title}) => {

    const onClick = useCallback(() => {
        setSelectedTab(index)
      }, [setSelectedTab, index])
    
      return (
        <li>
          <button onClick={onClick}>{title}</button>
        </li>
      )
}

export default TabTitle