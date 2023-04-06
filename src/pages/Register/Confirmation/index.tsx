import React from 'react';

import { useTranslation } from 'react-i18next';

import { AiFillInfoCircle } from 'react-icons/ai';

import {
  Content, Image, SubTitle, TextBold, Text, TextInformation,
} from './styles';

import { Card } from '../../../stylesheets/global';

import Title from '../../../components/Title';

import ImageCompleted from '../../../assets/completed.svg';

export default function Confirmation() {
  const { t } = useTranslation();

  return (
    <Card>
      <Title>{t("Success!")}</Title>

      <Content>
        <Image src={ImageCompleted} />
        <SubTitle>{t("Let's start with the user account!")}</SubTitle>

        <TextBold>{t("Wait, our team is validating the entered data.")}</TextBold>

        <Text>
        {t("We will send the confirmation as soon as possible to your email.")}
        </Text>

        <TextInformation>
          <AiFillInfoCircle color="#F0B86C" size="22px" />
          {t("An email with next steps has been sent")}
        </TextInformation>
      </Content>
    </Card>
  );
}
