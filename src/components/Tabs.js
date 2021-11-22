import React, { ReactElement } from "react"
import TabTitle from "./TabTitle"
import { useState } from "react"

const Tabs = (props) => {

  const [selectedTab, setSelectedTab] = useState(0) 
  const [plusName, setPlusName] = useState("plus-tab")
  const [plusButtonClicked, setPlusButtonClicked] = useState(0)
  
  function plusClicked() {
    setPlusButtonClicked()
    setSelectedTab();
    props.onPlusClicked();
    setPlusName("plus-tab-active");
    
    // TODO:
    // add new todo from collection
    
    setPlusName("plus-tab")
  }

  if (selectedTab) {
    props.tabs.map((item, index) => ()
  } 

    return (
      <div>
        <div className="tab-list">
          {/* TABS */}
          {props.tabs.map((item, index) => (
            <div>
            <TabTitle
              key={index} 
              title={item.title}
              index={index}
              setSelectedTab={setSelectedTab}
              selectedTab={selectedTab}
              plusButtonClicked={plusButtonClicked}
            />
          </div>
          ))}
          {/* PLUS BUTTON */}
          <button aria-label="Add a new tab" className={plusName} onClick={plusClicked}>+</button> 
       </div>
      </div>
    )
}

export default Tabs