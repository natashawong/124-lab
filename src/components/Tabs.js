import React from "react";
import TabTitle from "./TabTitle";

export default function Tabs(props) {
  const preventRepeats = new Set();
  console.log(props.data)
  return (
    <div>
      <div className="tab-list">
        {/* TABS */}
        {props.data.map((tab, i) => {
          if (!preventRepeats.has(tab.list)) {
            return (
              <div>
                <TabTitle
                  onEditTabTitle={(tabTitle, index) => props.onEditTabTitle(tabTitle, index)}
                  onSelectTab={selectedTab => props.onSelectTab(selectedTab)}
                  key={i} 
                  index={tab.id}
                  title={tab.list}
                  selectedTab={props.currTab}
                  mode={props.mode}
                />
              </div>
            )}
          preventRepeats.add(tab.list);
          })}
        {/* PLUS BUTTON - Add a new tab/list */}
        <button aria-label="Add a new tab" className="plus-tab" onClick={props.onNewTab}>+</button>
      </div>
    </div>
    )
}
