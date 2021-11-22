import React from "react";
import TabTitle from "./TabTitle";

export default function Tabs(props) {
  const preventRepeats = new Set();
  return (
    <div>
      <div className="tab-list">
        {/* TABS */}
        {props.data.map((tab, i) => {
          if (!preventRepeats.has(tab.list)) {
            return (
              <div>
                <TabTitle
                  onSelectTab={selectedTab => props.onSelectTab(selectedTab)}
                  key={i} 
                  title={tab.list}
                  selectedTab={props.currTab}
                />
              </div>
            )}
          preventRepeats.add(tab.list);
          })}
        {/* PLUS BUTTON - Add a new tab/list */}
        <button aria-label="Add a new tab" className="plusName" onClick={props.onNewTab}>+</button>
      </div>
    </div>
    )
}
