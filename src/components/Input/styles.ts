import styled from 'styled-components';

interface InputTextProps {
  width: string | undefined;
}

export const Container = styled.label`
  display: block;

  font-size: .9rem;
  font-weight: bold;

  margin-bottom: 25px;

  color: #205366;

  span {
    display: block;
    
    margin-bottom: 10px;
  }
`;

export const InputText = styled.input<InputTextProps>`
  border: 2px solid #E3EAEE;
  border-radius: 7px;

  padding: 0px 10px;

  width: ${(props) => props.width || '330px'};
  height: 40px;
`;
