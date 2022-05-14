import React from 'react'

interface ISliderProps {
  min: number
  max: number
  value: number
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Slider: React.FC<ISliderProps> = (props: ISliderProps) => {
  console.log(props.value)
  return (
    <div className="slidercontainer">
      <div className="slidervalue">
        <span>Current Value</span>
        <span>{props.value}</span>
      </div>
      <input min={props.min} max={props.max} value={props.value} onChange={props.handleChange} type="range" className="slider" />
      <div className="slidervalue">
        <span>{props.min}</span>
        <span>{props.max}</span>
      </div>

    </div>
  );
}