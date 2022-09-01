import { Container, Header, CarImages } from './styles';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';



export function CarDetails() {
    return (
        <Container>
            <Header>
                <BackButton onPress={() => { console.log('cicero') }} />
            </Header>

            <CarImages>
                <ImageSlider imagesUrl={['https://cdn.wheel-size.com/automobile/body/audi-rs5-2020-2022-1613028936.4473815.png']} />

            </CarImages>
        </Container>
    )
}