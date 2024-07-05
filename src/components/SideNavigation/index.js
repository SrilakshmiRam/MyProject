import {useState} from 'react'
import {IoMdHome} from 'react-icons/io'
import {TbGridDots} from 'react-icons/tb'

import './index.css'

const SideNavigation = () => {
  const [isClicked, setvalue] = useState(true)

  const onClickAirports = () => {
    setvalue(prevalue => !prevalue)
  }

  const classStyle = isClicked ? 'styleclick' : 'category'
  return (
    <div className="sidebar-container">
      <button type="button" className="home-icon-container">
        <IoMdHome className="icon" />
        <p className="text">Home</p>
      </button>
      <button type="button" className="home-icon-container">
        <TbGridDots className="icon" />
        <p className="text">Dshboard</p>
      </button>
      <h1 className="category-header">Services</h1>
      <button type="button" className={classStyle} onClick={onClickAirports}>
        Airports
      </button>
      <button type="button" className="category">
        Videos
      </button>
      <h1 className="category-header">Others</h1>
      <button type="button" className="category">
        List 1
      </button>
      <button type="button" className="category">
        List 2
      </button>
      <button type="button" className="category">
        List 3
      </button>
    </div>
  )
}

export default SideNavigation
