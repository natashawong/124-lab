import React, { useState } from "react";

export default function TabTitle(props) {
    const [tabTitle, setTabTitle] = useState(props.title);
  
    let className = 'tab-list-item';

    if (props.title === props.selectedTab) {
      className += ' tab-list-active';
    }

    function updateSelectedTab() {
      props.onSelectTab(props.title);
    }

    function editTabTitle(index) {
      return (e) => {
          setTabTitle( prevState => ({...prevState, [e.target.name] : e.target.value}))
          props.onEditTabTitle(e.target.value, index);
      }
  }

    return (
      <div className="tabs">
        <button onClick={updateSelectedTab} className="invisibleButton">
          <input type='text' id={props.key} name={props.key} value={props.title} onChange={editTabTitle(props.index)} className={className} disabled={props.mode !== "EDIT"}/>
        </button>
      </div>
    )
}
