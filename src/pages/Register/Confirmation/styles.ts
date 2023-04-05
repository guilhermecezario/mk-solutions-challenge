import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.img`
  max-height: 270px;

  margin-bottom: 50px;
`;

export const SubTitle = styled.h2`
  font-size: 1.2rem;

  margin-bottom: 10px;

  color: #63D391;
`;

export const TextBold = styled.label`
  display: block;

  font-size: .9rem;
  font-weight: bold;

  color: #205366;
`;

export const Text = styled.p`
  font-size: .9rem;
  line-height: 25px;

  margin-bottom: 30px;

  color: #205366;
`;

export const TextInformation = styled.p`
  display: flex;

  font-size: 1rem;
  font-weight: bold;

  margin-bottom: 30px;

  color: #F0B86C;

  svg {
    margin-right: 10px;
  }
`;
