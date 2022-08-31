import React from "react"
import { Container, Details, Brand, Name, About, Rent, Period, Price, Type, CarImage } from './styles'
import GasolineSvg from '../../assets/gasoline.svg';

interface CardData {
    brand: string;
    name: string;
    rent: {
        period: string;
        price: number;
    },
    thumbnail: string
}

interface Props {
    data: CardData
}

export function Car({ data }: Props) {
    console.log(data)
    return (
        <Container>
            <Details>
                <Brand>{data.brand}</Brand>
                <Name>{data.name}</Name>

                <About>
                    <Rent>
                        <Period>{data.rent.period}</Period>
                        <Price>{`R$ ${data.rent.price}`}</Price>
                    </Rent>
                    <Type>
                        <GasolineSvg />
                    </Type>
                </About>
            </Details>
            <CarImage
                source={{ uri: data.thumbnail }}
                resizeMode="contain"
            />
        </Container>
    )
}