import React, { useState } from 'react'
import { useTheme } from 'styled-components/native'
import { BackButton } from '../../components/BackButton'
import { Container, Header, Title, RentalPeriod, DateInfo, DateTitle, DateValue, Content, Footer } from './styles'

import ArrowSvg from '../../assets/arrow.svg'
import { StatusBar } from 'react-native'
import { Button } from '../../components/Button'
import { Calendar, DayProps, generateInterval } from '../../components/Calendar'
import { useNavigation } from '@react-navigation/native'

export function Scheduling() {

    const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>()
    const theme = useTheme();
    const navigation = useNavigation<any>();

    function handleConfirmRental() {
        navigation.navigate('SchedulingDetails')
    }

    function handleChangeDate(date: DayProps) {
        let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;
        let end = date;

        if (start.timestamp > end.timestamp) {
            start = end;
            end = start;
        }

        setLastSelectedDate(end);
        const interval = generateInterval(start, end);
    }


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

                <RentalPeriod>

                    <DateInfo>
                        <DateTitle>DE</DateTitle>
                        <DateValue selected={false} >18/06/2021</DateValue>
                    </DateInfo>

                    <ArrowSvg />

                    <DateInfo>
                        <DateTitle>ATÉ</DateTitle>
                        <DateValue selected={false} >18/06/2021</DateValue>
                    </DateInfo>

                </RentalPeriod>

            </Header>


            <Content>
                <Calendar
                    markedDates={{}}
                    onDayPress={handleChangeDate}
                />
            </Content>
            <Footer>
                <Button title="Confirmar" onPress={handleConfirmRental} />
            </Footer>

        </Container>
    )
}