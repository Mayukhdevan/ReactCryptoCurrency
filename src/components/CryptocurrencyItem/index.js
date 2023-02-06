import './index.css'

const CryptocurrencyItem = props => {
  const {currencyItem} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = currencyItem

  return (
    <li className="list-item">
      <div className="coin-type">
        <img className="coin-image" src={currencyLogo} alt={currencyName} />
        <p className="coin-name">{currencyName}</p>
      </div>
      <div className="coin-value">
        <div className="usd">
          <p className="value">{usdValue}</p>
        </div>
        <div className="euro">
          <p className="value">{euroValue}</p>
        </div>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
