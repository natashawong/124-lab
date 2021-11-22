
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
      <div className="tabs">
        <button onClick={updateSelectedTab} className="invisibleButton">
          <input type='text' id={props.key} name={props.key} value={props.title} className={className} disabled={props.mode !== "EDIT"}/>
        </button>
      </div>
    )
}
