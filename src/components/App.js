import React, { useEffect, useState } from 'react'
import CurrencySelector from './CurrencySelector'
import DisplayData from './DisplayData'
import { AppContainer, Heading } from './StyledComponents'

const App = () => {
  //define state using hooks = constructor in class components
  //const initialData = {"2022-04-18":39036.355,"2022-04-19":40661.67,"2022-04-20":41440}
  const initialCurrency = "AUD"
  const [currency, setCurrency] =useState(initialCurrency)
  const [bitcoinData, setBitcoinData] = useState({})
  const url = "https://api.coindesk.com/v1/bpi/historical/close.json?currency="

  useEffect( () => {
      console.log("Hi, I'm using useEffect")
      fetch(`${url}${currency}`)
      .then(response => response.json())
      .then(data => setBitcoinData(data.bpi))
      .catch(e => console.log(e))
      
    }
    ,
    [currency]
  )

  const handleCurrency = (value) => {
      console.log(value)
      setCurrency(value)
  }
  return (
    <AppContainer >
          <Heading>Bitcoin index</Heading>
          <CurrencySelector currency={currency} handleCurrency={handleCurrency}/>
          <DisplayData  bitcoinData={bitcoinData}/>
    </AppContainer>
  )
}

export default App
