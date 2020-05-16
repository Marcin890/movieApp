import styled from "styled-components";
export const AppWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.black.medium};
  flex-wrap: wrap;
  padding: 40px 0;
  min-height: 100vh;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
