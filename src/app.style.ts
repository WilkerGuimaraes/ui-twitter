import styled from "styled-components";

export const Layout = styled.div`
  margin: 0 auto;
  max-width: 1000px;
  min-height: 100vh;
  height: 100px;
  display: grid;
  grid-template-columns: 300px 1fr;
`;

export const Content = styled.div`
  border-left: 1px solid #ebeef0;
  border-right: 1px solid #ebeef0;
`;
