import React, { ReactElement } from "react"
import TabTitle from "./TabTitle"
import { useState } from "react"

const Tabs = ({ children }) => {
    const [selectedTab, setSelectedTab] = useState(0)

    return (
      <div>
        <ul>
          {children.map((item, index) => (
            <TabTitle
              key={index}
              title={item.props.title}
              index={index}
              setSelectedTab={setSelectedTab}
            />
          ))}
        </ul>
        {children[selectedTab]}
      </div>
    )
}

export default Tabs