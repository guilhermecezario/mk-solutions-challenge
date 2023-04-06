import styled from 'styled-components';

export const Container = styled.div`
  overflow: auto;

  height: 100vh;
  width: 100vw;

  margin: 0px auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #F0F4F5;
`;

export const Header = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
`;

export const Image = styled.img`
  max-width: 210px;

  margin: 30px;

  margin-bottom: 50px;
`;

export const Content = styled.div`
  width: 850px;

  padding: 30px;
`;
