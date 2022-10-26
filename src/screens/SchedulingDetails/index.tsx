import { Container, Header, CarImages, Content, Details, Description, Brand, Name, Rent, Period, Price, Acessories, RentalPeriod, CalendarIcon, DateInfo, DateTitle, DateValue, RentalPrice, RentalPriceLabel, RentalPriceDetails, RentalPriceQuota, RentalPriceTotal, Footer } from './styles';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Acessory } from '../../components/Acessory';
import { Button } from '../../components/Button';
import { Feather } from '@expo/vector-icons'

import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components/native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { CarDTO } from '../../dtos/CarDTO';
import { getAcessoryIcon } from '../../utils/getAccessoryIcon'
import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { getPlatformDate } from '../../utils/getPlatformDate';
import { api } from '../../services/api';
import { Alert } from 'react-native';

interface Params {
    car: CarDTO;
    dates: string[]
}

interface RentalPeriod {
    start: string;
    end: string;
}

export function SchedulingDetails() {

    const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>({} as RentalPeriod)

    const theme = useTheme()

    const navigation = useNavigation<any>();

    async function handleConfirmRental() {
        const schedulesByCar = await api.get(`/schedules_bycars/${car.id}`)

        const unavailable_dates = [
            ...schedulesByCar.data.unavailable_dates,
            ...dates
        ]

        await api.post('schedules_byuser', {
            user_id: 1,
            car,
            startDate: format(getPlatformDate(new Date(dates[0])), 'dd/MM/yyy'),
            endDate: format(getPlatformDate(new Date(dates[dates.length - 1])), 'dd/MM/yyy')
        })

        api.put(`/schedules_bycars/${car.id}`, {
            id: car.id,
            unavailable_dates
        })
            .then(response => {

            })
            .catch(() => Alert.alert('Não foi possível fazer o agendamento'))

        navigation.navigate('SchedulingComplete')
    }

    const routes = useRoute()
    const { car, dates } = routes.params as Params;

    const rentTotal = Number(dates.length * car.rent.price)


    useEffect(() => {
        setRentalPeriod({
            start: format(getPlatformDate(new Date(dates[0])), 'dd/MM/yyy'),
            end: format(getPlatformDate(new Date(dates[dates.length - 1])), 'dd/MM/yyy'),
        })
    }, [])


    return (
        <Container>
            <Header>
                <BackButton onPress={() => { navigation.goBack() }} />
            </Header>

            <CarImages>
                <ImageSlider imagesUrl={car.photos} />
            </CarImages>

            <Content>
                <Details>
                    <Description>
                        <Brand>{car.brand}</Brand>
                        <Name>{car.name}</Name>
                    </Description>

                    <Rent>
                        <Period>{car.rent.period}</Period>
                        <Price>R$ {car.rent.price} </Price>
                    </Rent>
                </Details>

                <Acessories>

                    {car.accessories.map(acessory => (
                        <Acessory
                            key={acessory.type}
                            name={acessory.name}
                            icon={getAcessoryIcon(acessory.type)}
                        />
                    ))}

                </Acessories>

                <RentalPeriod>
                    <CalendarIcon>
                        <Feather
                            name="calendar"
                            size={RFValue(24)}
                            color={theme.colors.shape}
                        />
                    </CalendarIcon>

                    <DateInfo>
                        <DateTitle>DE</DateTitle>
                        <DateValue>{rentalPeriod.start}</DateValue>
                    </DateInfo>

                    <Feather
                        name="chevron-right"
                        size={RFValue(10)}
                        color={theme.colors.text}
                    />

                    <DateInfo>
                        <DateTitle>ATÉ</DateTitle>
                        <DateValue>{rentalPeriod.end}</DateValue>
                    </DateInfo>
                </RentalPeriod>

                <RentalPrice>
                    <RentalPriceLabel>TOTAL</RentalPriceLabel>
                    <RentalPriceDetails>
                        <RentalPriceQuota>{`R$ ${car.rent.price} x ${dates.length} diárias`}</RentalPriceQuota>
                        <RentalPriceTotal>R$ {rentTotal}</RentalPriceTotal>
                    </RentalPriceDetails>
                </RentalPrice>

            </Content>

            <Footer>
                <Button title="Alugar agora" onPress={handleConfirmRental} color={theme.colors.success} />
            </Footer>

        </Container>
    )
}