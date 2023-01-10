import { useEffect, useState } from 'react'

import { Content, Img, Heading } from "./assets/styles/AppStyles"
import { Form } from "./Components/Form"
import { Result } from "./Components/Result"
import { Spinner } from './Components/Spinner'

import ImgCrypto from "./assets/img/imagen-criptos.png" 



function App() {
  const [currency, setCurrency] = useState({})
  const [result, setResult] = useState({})
  const [downloads, setDownloads] = useState(false)

  useEffect(() => {
    if (Object.keys(currency).length > 0) {
      setDownloads(true)
      setResult({})
      const { coin, crypto } = currency
      const quoteCrypto = async () => {
        const result = await (await fetch(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${coin}`)).json()
        setResult(result.DISPLAY[crypto][coin])
      setDownloads(false)
      }
      quoteCrypto()
    }           
  }, [currency])

  return ( 
    <Content> 
      <Img 
        src={ImgCrypto}
        alt="Image/Crypto"
      />

      <div>
        <Heading>Cotiza Criptomonedas al Instante</Heading>
        <Form
          setCurrency={setCurrency}
        />

        { downloads && <Spinner /> }
        { result.PRICE && <Result result={result} /> }
        
      </div>
    </Content>
  )
}

export default App
