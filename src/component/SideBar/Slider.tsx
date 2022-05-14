import React from 'react'

interface ISliderProps {

}

export const Slider: React.FC<ISliderProps> = ({ }) => {
  return (
    <div className="slidercontainer">
      <input type="range" className="slider" />

    </div>
  );
}