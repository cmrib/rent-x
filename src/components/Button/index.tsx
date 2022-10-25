import { TouchableOpacityProps } from 'react-native';
import { useTheme } from 'styled-components';
import { Container, Title } from './styles'

interface Props extends TouchableOpacityProps {
    title: string;
    color?: string;
    disabled?: boolean
}

export function Button({ title, color, disabled = false, ...rest }: Props) {

    const theme = useTheme()

    return (
        <Container
            color={color ? color : theme.colors.main}
            disabled={disabled}
            style={{ opacity: disabled ? 0.5 : 1 }}
            {...rest}
        >
            <Title>{title}</Title>

        </Container>
    )
}