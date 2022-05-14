import React from "react"
import "./App.css"
import { Slider } from "./component/SideBar/Slider"
import { SideBarItem } from "./component/SideBarItem/SideBarItem"
import { DEFAULT_VALUES } from "./constants/defaultvalues"

function App() {
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const [options, setOptions] = React.useState(DEFAULT_VALUES)
  const selectedOption = options[selectedIndex]
  return (
    <div className="container">
      <div className="image" />
      <div className="sidebar">
        {options.map((item, index) => {
          return (
            <SideBarItem
              key={index}
              active={index === selectedIndex}
              name={item.name}
              handleClick={() => setSelectedIndex(index)}
            />)
        })}
      </div>
      <Slider />
    </div>
  )
}

export default App
