import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  padding: 2rem;

  border-radius: 25px;

  background-color: #ffffff;
`;

export const LineForm = styled.div`
  display: flex;
  align-items: center;

  div + div {
    margin-left: 25px;
  }
`;
