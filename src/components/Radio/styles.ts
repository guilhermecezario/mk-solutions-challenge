import styled from 'styled-components';

export const Container = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 15px 40px;
  margin-right: 10px;

  width: 75px;

  margin-bottom: 25px;

  text-align: center;

  position: relative;

  font-size: 1rem;
  font-weight: bold;

  color: #205366;

  border: 2px solid #E3EAEE;
  border-radius: 7px;
`;

export const IconSelect = styled.div`
  margin-top: 5px;
  margin-left: 5px;
  position: absolute;
  left: 0;
  top: 0;
`;

export const Input = styled.input`
  display: none;
`;
