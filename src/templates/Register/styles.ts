import styled from 'styled-components';

interface NavBarItemProps {
  selected: boolean;
  finished: boolean;
}

interface ProgressBarProps {
  width: string;
}

export const Container = styled.div`
  min-height: 100vh;

  padding: 30px;

  width: 100%;
  margin: 0px auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #F0F4F5;
`;

export const NavBar = styled.div`
  position: relative;

  display: flex;
  justify-content: space-between;

  background-color: #fff;

  border-radius: 25px;

  height: 48px;
  width: 850px;

  margin-bottom: 20px;
`;

export const ProcessBar = styled.div<ProgressBarProps>`
  position: absolute;
  z-index: 0;

  display: flex;
  justify-content: space-between;

  background-color: #63D391;

  border-radius: 25px;

  height: 48px;
  width: ${(props) => props.width};

  margin-bottom: 20px;
`;

export const NavBarItem = styled.div<NavBarItemProps>`
  flex: 1;
  z-index: 999;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => (props.selected ? '#4B8DB5' : 'transparent')};
  color: ${(props) => (props.finished ? '#ffffff' : '#205366')};

  border-radius: 25px;

  height: 48px;

  margin-bottom: 20px;

  font-size: 1rem;
  font-weight: bold;

  span {
    margin-right: 8px;

    color: ${(props) => (props.finished ? '#ffffff' : '#63D391')};
  }
`;

export const Content = styled.div`
  width: 850px;
`;
