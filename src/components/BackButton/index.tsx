import { Container } from './styles';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native'
import { TouchableOpacityProps } from 'react-native'

interface Props extends TouchableOpacityProps {
    color?: string;
}

export function BackButton({ color, ...rest }: Props) {

    const theme = useTheme();

    return (
        <Container
            {...rest}
        >
            <MaterialIcons name="arrow-back" color={color ? color : theme.colors.text} size={32} />
        </Container>
    )

}