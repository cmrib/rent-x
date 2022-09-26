import React from 'react';
import { Container, Header, CarList } from './styles';
import { StatusBar } from 'react-native';
import Logo from '../../assets/logo.svg'
import { RFValue } from 'react-native-responsive-fontsize'
import { TotalCars } from '../../components/TotalCars';
import { Car } from '../../components/Car';
import { useNavigation } from '@react-navigation/native';

const CarData = {
    brand: 'audi',
    name: 'RS 5 Coupé',
    rent: {
        period: 'ao dia',
        price: 120
    },
    thumbnail: 'https://cdn.wheel-size.com/automobile/body/audi-rs5-2020-2022-1613028936.4473815.png'
}


export function Home() {

    const navigation = useNavigation<any>()

    function handleCarDetails() {
        navigation.navigate('CarDetails')
    }

    return (
        <Container>
            <StatusBar barStyle='light-content' backgroundColor='transparent' translucent />
            <Header>
                <Logo width={RFValue(108)} height={RFValue(12)} />
                <TotalCars />
            </Header>

            <CarList
                data={[1, 2, 3]}
                keyExtractor={item => String(item)}
                renderItem={({ item }) => <Car data={CarData} onPress={handleCarDetails} />}
            />
        </Container>
    )
}