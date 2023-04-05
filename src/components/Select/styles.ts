import styled from 'styled-components';

interface InputTextProps {
  width?: string | undefined;
}

export const Container = styled.div`
  margin-bottom: 25px;
`;

export const Label = styled.label`
  display: block;

  font-size: .9rem;
  font-weight: bold;

  margin-bottom: 10px;

  color: #205366;
`;

export const InputSelect = styled.select<InputTextProps>`
  border: 2px solid #E3EAEE;
  border-radius: 7px;

  padding: 0px 10px;

  width: ${(props) => props.width || '330px'};
  height: 40px;
`;
