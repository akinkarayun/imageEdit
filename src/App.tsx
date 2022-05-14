import React from "react"
import "./App.css"
import { Slider } from "./component/Slider/Slider"
import { SideBarItem } from "./component/SideBarItem/SideBarItem"
import { DEFAULT_VALUES } from "./constants/defaultvalues"

function App() {
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const [options, setOptions] = React.useState(DEFAULT_VALUES)
  const selectedOption = options[selectedIndex]
  function handleSliderChange(event: React.ChangeEvent<HTMLInputElement>) {
    setOptions(prevOptions => {
      return prevOptions.map((option, index) => {
        if (index !== selectedIndex) return option
        return { ...option, value: parseInt(event.target.value) }
      })
    })
  }
  function getImageStyle() {
    const filters = options.map(option => {
      return `${option.property}(${option.value}${option.unit})`
    })
    return { filter: filters.join(" ") }
  }
  return (
    <div className="container">
      <div className="image" style={getImageStyle()} />
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
      <Slider
        min={selectedOption.range.min}
        max={selectedOption.range.max}
        value={selectedOption.value}
        handleChange={handleSliderChange}
      />
    </div>
  )
}

export default App
