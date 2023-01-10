import { useEffect, useState } from 'react'

import { useSelectCurrency } from '../hooks/useSelectCurrency'

import { Error } from './Error'

import { InputSubmit } from '../assets/styles/FormStyles'
import { coins } from '../data/coins'

const Form = ({ setCurrency }) => {   
    const [cryptos, setCyptos] = useState([])
    const [error, setError] = useState(false)

    const [coin, SelectCurrency] = useSelectCurrency('Elige tu Moneda', coins)   
    const [crypto, SelectCrypto] = useSelectCurrency('Elige tu criptomoneda', cryptos)   
    
    useEffect(() => {
        const consultAPI = async () => {

            const result = await (await fetch("https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD")).json()                 

            const arrayCryptos = result.Data.map(crypto => {
                const objectcrypto = {
                    id: crypto.CoinInfo.Name,
                    name: crypto.CoinInfo.FullName
                }                
                return objectcrypto
            })
            setCyptos(arrayCryptos)          
        } 
        consultAPI()
    }, [])

    const handelSubmit = e => {
        e.preventDefault()
        if ([coin, crypto].includes(''))
            return setError(true)
        setError(false)
        setCurrency({
            coin,
            crypto,
        })
    }
    
    return (
        <>
            {error && <Error>Error Enviando los datos</Error>}

            <form
                onSubmit={handelSubmit}
            >        
                <SelectCurrency />          

                <SelectCrypto />  

                < InputSubmit            
                    type="submit"
                    alt="Image/crypto"
                />
            </form>
        </>
    )
}

export { Form }