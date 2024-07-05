import {Component} from 'react'
import {FaArrowDown} from 'react-icons/fa'
import Header from '../Header'
import Airport from '../Airport'
import SideNavigation from '../SideNavigation'
import './index.css'

const airportsData = [
  {
    airportName: 'Indra Gandhi International Airport',
    country: 'India',
    code: 'DEL',
    terminals: 3,
  },
  {
    airportName: 'Dubai International Airport',
    country: 'UAE',
    code: 'DXB',
    terminals: 5,
  },
  {
    airportName: 'Heathrow Airport',
    country: 'England',
    code: 'LHR',
    terminals: 6,
  },
  {
    airportName: 'Istanbul Airport',
    country: 'Turky',
    code: 'IST',
    terminals: 3,
  },
  {
    airportName: 'Rajiv Gandhi International Airport',
    country: 'Texas',
    code: 'DFW',
    terminals: 14,
  },
]

class Home extends Component {
  state = {dataList: airportsData}

  updatedData = code => {
    const {dataList} = this.state
    const filteredData = dataList.filter(each => each.code !== code)
    this.setState({
      dataList: filteredData,
    })
  }

  render() {
    const {dataList} = this.state
    return (
      <>
        <Header />
        <div className="home-container">
          <SideNavigation />
          <div className="airports-data-list">
            <div className="addnew-container">
              <h1 className="header-airport">Airports</h1>
              <button type="button" className="addnew-btn">
                +Add new
              </button>
            </div>
            <ul className="airports-list">
              <li className="airports-table">
                <div className="allairports-container">
                  <input type="checkbox" />
                  <p className="text">All Airports</p>
                  <FaArrowDown className="icon-arrow" />
                </div>
                <p className="country">country</p>
                <p className="code">Code</p>
                <p className="terminals">terminals</p>
              </li>
              {dataList.map(eachItem => (
                <Airport
                  dataDetails={eachItem}
                  key={eachItem.code}
                  updatedData={this.updatedData}
                />
              ))}
            </ul>
          </div>
        </div>
      </>
    )
  }
}

export default Home
