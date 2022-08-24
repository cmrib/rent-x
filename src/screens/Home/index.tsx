import React from 'react';
import { Container, Header, Title } from './styles';
import { StatusBar } from 'react-native';
import * as Svg from 'react-native-svg'



export function Home() {
    return (
        <Container>
            <StatusBar barStyle='light-content' backgroundColor='transparent' translucent />
            <Header>
                <Title>Cicero</Title>
            </Header>
        </Container>
    )
}