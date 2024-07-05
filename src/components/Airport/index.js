import {Link} from 'react-router-dom'
import {FiEdit2} from 'react-icons/fi'
import {MdDeleteOutline} from 'react-icons/md'
import './index.css'

const Airport = props => {
  const {dataDetails, updatedData} = props
  const {airportName, country, code, terminals} = dataDetails
  const onClickDelete = () => {
    updatedData(code)
  }
  return (
    <li className="li-container">
      <div className="listItem-container">
        <div className="allairports-container">
          <input type="checkbox" />
          <p className="text">{airportName}</p>
        </div>
        <p className="country-name">{country}</p>
        <p className="code-name">{code}</p>
        <p className="terminals-count">{terminals}</p>
        <FiEdit2 />
        <MdDeleteOutline onClick={onClickDelete} />
      </div>
    </li>
  )
}

export default Airport
