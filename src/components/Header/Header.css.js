import styled from "styled-components";
export const Logo = styled.h1`
  color: ${({ theme }) => theme.colors.white.normal};
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing.xxl}px;
  margin-bottom: ${({ theme }) => theme.spacing.xxxl}px;
`;
