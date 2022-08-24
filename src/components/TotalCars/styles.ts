import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Message = styled.Text`
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.primary_400};
    font-size: ${RFValue(15)}px;
`