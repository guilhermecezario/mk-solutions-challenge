import styled from 'styled-components';
import { Text as TextGlobal } from '../../stylesheets/global';

export const Container = styled.label`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  padding: 15px 20px;
  margin-right: 10px;

  margin-bottom: 10px;

  max-width: 520px;

  position: relative;

  border: 2px solid #E3EAEE;
  border-radius: 7px;
`;

export const Content = styled.div``;

export const Text = styled(TextGlobal)`
  margin-bottom: 0px;
`;

export const IconSelect = styled.div`
  margin-top: 5px;
  margin-left: 5px;
  position: absolute;
  left: 0;
  top: 0;
`;

export const Label = styled.label`
  display: block;

  font-size: .9rem;
  font-weight: bold;

  color: #205366;
`;

export const Input = styled.input`
  display: none;
`;

export const Button = styled.button`
  font-size: .8rem;
  font-weight: bold;

  padding: 10px 25px;

  border-radius: 7px;

  background-color: #205366;
  color: #fff;
`;
