import React from 'react'

interface ISideBarItemProps {
  key: number;
  name: string
  active: boolean
  handleClick: () => void

}

export const SideBarItem: React.FC<ISideBarItemProps> = (props: ISideBarItemProps) => {
  return (
    <button onClick={props.handleClick} key={props.key} className={`sidebaritem ${props.active ? 'active' : ''}`}>{props.name}</button>
  );
}