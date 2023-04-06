import styled from 'styled-components';

export const Card = styled.div`
  padding: 2rem;

  border-radius: 25px;

  background-color: #ffffff;
`;

export const SubTitle = styled.h2`
  font-size: 1rem;

  margin-bottom: 10px;

  color: #63D391;
`;

export const Text = styled.p`
  font-size: .9rem;
  line-height: 25px;

  margin-bottom: 30px;

  max-width: 375px;

  color: #205366;
`;

export const Form = styled.form``;

export const LineForm = styled.div`
  display: flex;
  align-items: center;

  label + label {
    margin-left: 20px;
  }
`;

export const Division = styled.hr`
  height: 1px;
  width: 100%;

  margin-bottom: 20px;

  background-color: #F1F5F6;
`;

export const Button = styled.button`
  font-size: 1rem;
  font-weight: bold;

  height: 40px;
  width: 180px;

  border-radius: 7px;

  background-color: #63D391;
  color: #fff;
`;

export const ButtonLink = styled.button`
  font-size: .9rem;

  background: none;

  margin-left: 20px;

  color: #205366;
  text-decoration: underline;

  cursor: pointer;
`;

export const Label = styled.label`
  display: block;

  font-size: .9rem;
  font-weight: bold;

  margin-bottom: 15px;

  color: #205366;
`;
