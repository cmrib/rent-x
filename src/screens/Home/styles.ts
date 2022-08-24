import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;   
    background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.View`    
    background-color: ${({ theme }) => theme.colors.header};
    height: 113px;
    width: 100%;
    justify-content: flex-end;
    padding: 0px 0px 16px 32px;
`;

export const Title = styled.Text`    
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: 24px;
`;