import styled from "styled-components/native";

import { TouchableOpacity } from "react-native";

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  padding-top: 20px;
  padding-left: ${({ theme }) => theme.SPACING.MD}px;
  padding-right: ${({ theme }) => theme.SPACING.MD}px;
`;

export const BoxInput = styled.View`
  gap: 20px;
  margin-bottom: 40px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.SEMIBOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  color: ${({ theme }) => theme.COLORS.BLACK};
  margin-bottom: 34px;
  text-align: center;
`;

export const SignUpButton = styled(TouchableOpacity)`
  margin-top: 14px;
`;

export const SignUpText = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  text-align: center;
`;

export const Underline = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  text-align: center;
  text-decoration: underline;
`;
