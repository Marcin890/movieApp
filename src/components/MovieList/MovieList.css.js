import styled from "styled-components";
export const Container = styled.div`
  padding: ${({ theme }) => theme.spacing.sm}px 0;
  display: flex;
  flex-wrap: wrap;
  margin-top: ${({ theme }) => theme.spacing.xxxl}px;
`;
export const ReactPaginateWrapper = styled.div`
  ul {
    list-style-type: none;
    display: flex;
    justify-content: center;
  }

  .pagination li {
    margin: 2px;
  }

  .pagination li a {
    padding: 10px;
    background: grey;
  }

  li.active a {
    background: gold;
  }
`;
