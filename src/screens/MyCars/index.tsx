import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StatusBar, FlatList } from 'react-native';
import { useTheme } from 'styled-components/native';
import { CarDTO } from '../../dtos/CarDTO';
import { api } from '../../services/api';
import { Container, Header, Title, SubTitle, Content, Appointments, AppointmentsTitle, AppointmentsQuantity } from './styles';
import { BackButton } from '../../components/BackButton';
import { Car } from '../../components/Car';


interface CarProps {
    id: string;
    user_id: string
    car: CarDTO;
}

export function MyCars() {

    const [cars, setCars] = useState<CarProps[]>([])

    const [loading, setLoading] = useState(true);

    const theme = useTheme()

    const navigation = useNavigation()


    useEffect(() => {
        async function fetchCars() {
            try {
                const response = await api.get(`/schedules_byuser?user_id=${1}`)
                console.log(response.data)
                setCars(response.data)
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }
        fetchCars()

    }, [])

    return (
        <Container>
            <Header>

                <StatusBar
                    barStyle='light-content'
                    translucent
                    backgroundColor='transparent'
                />

                <BackButton
                    onPress={() => { navigation.goBack() }}
                    color={theme.colors.shape}
                />

                <Title>
                    Escolha uma {'\n'}data de início e {'\n'}fim do aluguel.
                </Title>

                <SubTitle>
                    Conforto, segurança e privacidade.
                </SubTitle>

            </Header>

            <Content>
                <Appointments>
                    <AppointmentsTitle>Agendamentos feitos</AppointmentsTitle>
                    <AppointmentsQuantity>05</AppointmentsQuantity>
                </Appointments>

                <FlatList
                    data={cars}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => <Car data={item.car} />}
                />
            </Content>



        </Container>
    );
}