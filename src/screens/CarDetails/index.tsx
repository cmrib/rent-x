import { Container, Header, CarImages, Content, Details, Description, Brand, Name, Rent, Period, Price, Acessories, About, Footer } from './styles';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Acessory } from '../../components/Acessory';
import { Button } from '../../components/Button';

import speedSvg from '../../assets/speed.svg'
import accelerationSvg from '../../assets/acceleration.svg'
import forceSvg from '../../assets/force.svg'
import gasolineSvg from '../../assets/gasoline.svg'
import exchangeSvg from '../../assets/exchange.svg'
import peopleSvg from '../../assets/people.svg'


export function CarDetails() {
    return (
        <>
            <Container>
                <Header>
                    <BackButton onPress={() => { console.log('cicero') }} />
                </Header>

                <CarImages>
                    <ImageSlider imagesUrl={['https://cdn.wheel-size.com/automobile/body/audi-rs5-2020-2022-1613028936.4473815.png']} />
                </CarImages>

                <Content>
                    <Details>
                        <Description>
                            <Brand>Lamborghini</Brand>
                            <Name>Huracan</Name>
                        </Description>

                        <Rent>
                            <Period>Ao dia</Period>
                            <Price>R$ 580</Price>
                        </Rent>
                    </Details>

                    <Acessories>
                        <Acessory name="380Km/h" icon={speedSvg} />
                        <Acessory name="3.2s" icon={accelerationSvg} />
                        <Acessory name="800 HP" icon={forceSvg} />
                        <Acessory name="Gasolina" icon={gasolineSvg} />
                        <Acessory name="Auto" icon={exchangeSvg} />
                        <Acessory name="2 pessoas" icon={peopleSvg} />
                    </Acessories>

                    <About>
                        Este é automóvel desportivo. Surgiu do lendário touro de lide indultado na praça Real Maestranza de Sevilla. É um belíssimo carro para quem gosta de acelerar.
                    </About>
                    <About>
                        Este é automóvel desportivo. Surgiu do lendário touro de lide indultado na praça Real Maestranza de Sevilla. É um belíssimo carro para quem gosta de acelerar.
                    </About>
                    <About>
                        Este é automóvel desportivo. Surgiu do lendário touro de lide indultado na praça Real Maestranza de Sevilla. É um belíssimo carro para quem gosta de acelerar.
                    </About>
                    <About>
                        Este é automóvel desportivo. Surgiu do lendário touro de lide indultado na praça Real Maestranza de Sevilla. É um belíssimo carro para quem gosta de acelerar.
                    </About>
                    <About>
                        Este é automóvel desportivo. Surgiu do lendário touro de lide indultado na praça Real Maestranza de Sevilla. É um belíssimo carro para quem gosta de acelerar.
                    </About>
                    <About>
                        Este é automóvel desportivo. Surgiu do lendário touro de lide indultado na praça Real Maestranza de Sevilla. É um belíssimo carro para quem gosta de acelerar.
                    </About>
                </Content>

                <Footer>
                    <Button title="Confirmar" />
                </Footer>

            </Container>
        </>
    )
}