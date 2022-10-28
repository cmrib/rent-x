import { Container, ImageIndexes, ImageIndex, CarImageWrapper, CarImage } from './styles'
import { FlatList } from 'react-native'

interface Props {
    imagesUrl: string[];
}



export function ImageSlider({ imagesUrl }: Props) {
    return (
        <Container>

            <ImageIndexes>

                {
                    imagesUrl.map((_, index) => (
                        <ImageIndex
                            key={String(index)}
                            active={true}
                        />
                    ))
                }

            </ImageIndexes>

            <FlatList
                data={imagesUrl}
                keyExtractor={key => key}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) =>
                    <CarImageWrapper>
                        <CarImage
                            source={{ uri: item }}
                            resizeMode="contain"
                        />
                    </CarImageWrapper>
                }
            />
        </Container>
    )
}