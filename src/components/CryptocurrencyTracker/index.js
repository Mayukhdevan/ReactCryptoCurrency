import {Component} from 'react'
import './index.css'
import Loader from 'react-loader-spinner'
import CryptocurrenciesList from '../CryptocurrenciesList'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class CryptocurrencyTracker extends Component {
  state = {cryptoData: [], isLoading: true}

  componentDidMount() {
    this.fetchCryptoData()
  }

  fetchCryptoData = async () => {
    const res = await fetch('https://apis.ccbp.in/crypto-currency-converter')
    const data = await res.json()
    const updatedData = data.map(eachData => ({
      currencyName: eachData.currency_name,
      usdValue: eachData.usd_value,
      euroValue: eachData.euro_value,
      id: eachData.id,
      currencyLogo: eachData.currency_logo,
    }))
    this.setState({cryptoData: updatedData, isLoading: false})
  }

  render() {
    const {cryptoData, isLoading} = this.state

    return (
      <div className="bg-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <CryptocurrenciesList currencyData={cryptoData} />
        )}
      </div>
    )
  }
}

export default CryptocurrencyTracker
