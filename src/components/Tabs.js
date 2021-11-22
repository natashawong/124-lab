import React from "react";
import TabTitle from "./TabTitle";

export default function Tabs(props) {
  const tabs = [];
  for (let i = 0; i < props.data.length; i++) {
    tabs.push({
      list: props.data[i].list,
      id: props.data[i].id,
    });
  }

  const preventRepeats = new Set();
  const uniqueTabs = [];
  for (let i = 0; i < tabs.length; i++) {
    if (!preventRepeats.has(tabs[i].list)) {
      uniqueTabs.push(tabs[i]);
    }
    preventRepeats.add(tabs[i].list);
  }

  return (
    <div>
      <div className="tab-list">
        {/* TABS */}
        {uniqueTabs.map((tab, i) => {
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
          )}
        {/* PLUS BUTTON - Add a new tab/list */}
        <button aria-label="Add a new tab" className="plus-tab" onClick={props.onNewTab}>+</button>
      </div>
    </div>
    )
}
