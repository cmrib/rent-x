import React, { useEffect, useState } from 'react';
import { Container, Header, CarList, MyCarsButton, Content } from './styles';
import { StatusBar } from 'react-native';
import Logo from '../../assets/logo.svg'
import { RFValue } from 'react-native-responsive-fontsize'
import { TotalCars } from '../../components/TotalCars';
import { Car } from '../../components/Car';
import { useNavigation } from '@react-navigation/native';
import { api } from '../../services/api';
import { CarDTO } from '../../dtos/CarDTO'
import { Load } from '../../components/Load';
import { Ionicons } from '@expo/vector-icons'
import { useTheme } from 'styled-components/native';


export function Home() {

    const theme = useTheme()
    const navigation = useNavigation<any>()

    function handleCarDetails(car: CarDTO) {
        navigation.navigate('CarDetails', { car })
    }

    function handleOpenMyCars() {
        navigation.navigate('MyCars')
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

            {loading ? <Load /> :

                <Content>
                    <CarList
                        data={cars}
                        keyExtractor={item => String(item.id)}
                        renderItem={({ item }) => <Car data={item} onPress={() => handleCarDetails(item)} />}
                    />
                </Content>
            }

            <MyCarsButton onPress={handleOpenMyCars}>
                <Ionicons name="ios-car-sport" color={theme.colors.shape} size={32} />
            </MyCarsButton >

        </Container>
    )
}