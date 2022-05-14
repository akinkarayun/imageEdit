import './App.css';
import { Slider } from './component/SideBar/Slider';
import { SideBarItem } from './component/SideBarItem/SideBarItem';

function App() {
  return (
    <div className="container">
      <div className="image" />
      <div className="sidebar">
        <SideBarItem />
      </div>
      <Slider />
    </div>
  );
}

export default App;
