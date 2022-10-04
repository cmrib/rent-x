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
import { useNavigation, useRoute } from '@react-navigation/native';
import { CarDTO } from '../../dtos/CarDTO';


interface Params {
    car: CarDTO
}

const iconType = {
    'exchange': exchangeSvg,
    'speed': speedSvg,
    'acceleration': accelerationSvg,
    'seats': peopleSvg,
    'gasoline_motor': gasolineSvg,
    'turning_diameter': forceSvg
}

export function CarDetails() {

    const navigation = useNavigation<any>()

    const route = useRoute();

    const { car } = route.params as Params

    function handleConfirmRental() {
        navigation.navigate('Scheduling')
    }

    function handleBack() {
        navigation.goBack()
    }

    return (

        <Container>
            <Header>
                <BackButton onPress={handleBack} />
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
                        <Price>{`R$ ${car.rent.price}`}</Price>
                    </Rent>
                </Details>

                <Acessories>
                    {car.accessories.map(acessory => <Acessory
                        key={acessory.type}
                        name={acessory.name}
                        icon={speedSvg}
                    />)}

                </Acessories>

                <About>
                    {car.about}
                </About>

            </Content>

            <Footer>
                <Button title="Escolher período do aluguel" onPress={handleConfirmRental} />
            </Footer>

        </Container>
    )
}