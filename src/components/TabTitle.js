
import React from "react";

export default function TabTitle(props) {
    let className = 'tab-list-item';

    if (props.title === props.selectedTab) {
      className += ' tab-list-active';
    }

    function updateSelectedTab() {
      props.onSelectTab(props.title);
    }

    return (
      <div className = "tabs">
        <input type='text' id={props.key} name={props.key} value={props.title} onClick={updateSelectedTab} className={className}/>
        {/* <input type='text' id={index} name={index} value={title} onClick={onClick} readOnly className={className} style={{outline: "none"}}/> */}
      </div>
    )
}
