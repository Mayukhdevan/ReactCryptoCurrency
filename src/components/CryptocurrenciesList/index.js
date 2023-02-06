import './index.css'
import CryptocurrencyItem from '../CryptocurrencyItem'

const CryptocurrenciesList = props => {
  const {currencyData} = props

  return (
    <>
      <h1 className="main-heading">Cryptocurrency Tracker</h1>
      <img
        className="coins-image"
        src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
        alt="cryptocurrency"
      />
      <ul className="crypto-lists">
        <li key="predefined-key" className="list-item table-heading-container">
          <h1 className="table-heading coin-type">Coin Type</h1>
          <div className="coin-value">
            <h1 className="table-heading">USD</h1>
            <h1 className="table-heading">EURO</h1>
          </div>
        </li>
        {currencyData.map(eachData => (
          <CryptocurrencyItem key={eachData.id} currencyItem={eachData} />
        ))}
      </ul>
    </>
  )
}

export default CryptocurrenciesList
