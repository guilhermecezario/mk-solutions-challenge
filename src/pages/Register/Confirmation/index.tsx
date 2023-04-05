import React from 'react';

import { AiFillInfoCircle } from 'react-icons/ai';

import {
  Content, Image, SubTitle, TextBold, Text, TextInformation,
} from './styles';

import { Card } from '../../../stylesheets/global';

import Title from '../../../components/Title';

import ImageCompleted from '../../../assets/completed.svg';

export default function Confirmation() {
  return (
    <Card>
      <Title>Sucesso!</Title>

      <Content>
        <Image src={ImageCompleted} />
        <SubTitle>Vamos começar pela conta de usuario!</SubTitle>

        <TextBold>Aguarde que nossa equipe está validando os dados informados.</TextBold>

        <Text>
          Enviaremos a confirmação o mais breve possivel em seu email.
        </Text>

        <TextInformation>
          <AiFillInfoCircle color="#F0B86C" size="22px" />
          Foi enviado um email com os próximos passos
        </TextInformation>
      </Content>
    </Card>
  );
}
