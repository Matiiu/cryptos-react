import { Container, IMG, Price, Text  } from "../assets/styles/ResultStyles"

const Result = ({ result }) => {
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = result
    return (
        <Container> 
            <IMG 
                src={`https://cryptocompare.com${IMAGEURL}`}
                alt="Image/Crypto"             
            />

            <div>
                <Price>El Precio es de: <span>{PRICE}</span> </Price>
                <Text>Precio mas alto del día: <span>{HIGHDAY}</span> </Text>
                <Text>Precio mas Bajo del día: <span>{LOWDAY}</span> </Text>
                <Text>Variación Ultimas 24 Horas: <span>{CHANGEPCT24HOUR}</span> </Text>
                <Text>Ultima Actualización: <span>{LASTUPDATE}</span> </Text>
            </div>
        </Container>
    )
}

export { Result }