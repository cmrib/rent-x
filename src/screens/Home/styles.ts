import styled from 'styled-components/native';
import { FlatList, FlatListProps } from 'react-native';
import { CarDTO } from '../../dtos/CarDTO';

export const Container = styled.View`
    flex: 1;   
    background-color: ${({ theme }) => theme.colors.background_primary};
    align-items: center;
    justify-content: center;
`;

export const Header = styled.View`    
    background-color: ${({ theme }) => theme.colors.header};
    height: 113px;
    width: 100%;
    flex-direction: row;
    align-items: flex-end;
    justify-content:space-between;
    padding: 32px 24px;
`;

export const CarList = styled(
    FlatList as new (props: FlatListProps<CarDTO>) => FlatList<CarDTO>
).attrs({
    contentContainerStyle: {
        padding: 24
    },
    showsVerticalScrollIndicator: false
})`


`;

export const MyCarsButton = styled.TouchableOpacity`
    width: 60px;
    height: 60px;
    background-color: ${({ theme }) => theme.colors.main};
    align-items: center;
    justify-content: center;
    border-radius: 30px;
    position: absolute;
    right: 23px;
    bottom: 13px;
    opacity: 0.85;
`