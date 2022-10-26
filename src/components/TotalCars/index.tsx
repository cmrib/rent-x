import { Message } from "./styles"

interface TotalCarsProps {
    carTotal: number
}

export function TotalCars({ carTotal }: TotalCarsProps) {
    return (
        <Message>Total de {carTotal} carros</Message>
    )
}