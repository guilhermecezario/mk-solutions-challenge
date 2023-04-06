import styled from 'styled-components';

interface ButtonProps {
  selected: boolean;
}

export const Container = styled.div`
  position: relative;

  display: flex;
  justify-content: space-between;

  background-color: #fff;

  border-radius: 25px;

  margin: 30px;

  height: 48px;
  /* width: 100%; */

  margin-bottom: 20px;
`;

export const Button = styled.button<ButtonProps>`
  flex: 1;
  z-index: 999;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => (props.selected ? '#4B8DB5' : 'transparent')};
  color: ${(props) => (props.selected ? '#ffffff' : '#205366')};

  border-radius: 25px;

  height: 48px;

  padding: 0px 20px;

  margin-bottom: 20px;

  font-size: 1rem;
  font-weight: bold;
`;
