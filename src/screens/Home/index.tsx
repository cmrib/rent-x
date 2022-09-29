import React, { useEffect, useState } from 'react';
import { Container, Header, CarList } from './styles';
import { StatusBar } from 'react-native';
import Logo from '../../assets/logo.svg'
import { RFValue } from 'react-native-responsive-fontsize'
import { TotalCars } from '../../components/TotalCars';
import { Car } from '../../components/Car';
import { useNavigation } from '@react-navigation/native';
import { api } from '../../services/api';
import { CarDTO } from '../../dtos/CarDTO'
import { Load } from '../../components/Load';



const CarData = {
    brand: 'audi',
    name: 'RS 5 Coupé',
    rent: {
        period: 'ao dia',
        price: 120
    },
    thumbnail: 'https://cdn.wheel-size.com/automobile/body/audi-rs5-2020-2022-1613028936.4473815.png'
}

interface CarProps {
    brand: string;
    name: string;
    rent: {
        period: string;
        price: number
    },
    thumbnail: string
}

export function Home() {

    const navigation = useNavigation<any>()

    function handleCarDetails() {
        navigation.navigate('CarDetails')
    }

    const [cars, setCars] = useState<CarDTO[]>([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        async function fetchCars() {
            try {
                const response = await api.get('/cars')
                setCars(response.data)
                setLoading(false)
            } catch (error) {
                console.log(error)
                setLoading(true)
            }
        }
        fetchCars()
    }, [])

    return (
        <Container>
            <StatusBar barStyle='light-content' backgroundColor='transparent' translucent />
            <Header>
                <Logo width={RFValue(108)} height={RFValue(12)} />
                <TotalCars />
            </Header>


            {loading ? <Load /> : <CarList
                data={cars}
                keyExtractor={item => String(item.id)}
                renderItem={({ item }) => <Car data={item} onPress={handleCarDetails} />}
            />}

        </Container>
    )
}