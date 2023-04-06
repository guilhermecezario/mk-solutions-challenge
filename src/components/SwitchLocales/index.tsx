import React from 'react';

import { useTranslation } from 'react-i18next'

import {
  Container, Button,
} from './styles';

export default function SwitchLocales() {
  const { i18n } = useTranslation();

  const selectedLanguage = i18n.language;

  const handleChangeLanguage = (language: string) => {
    i18n.changeLanguage(language)
  }

  return (
    <Container>
      <Button
        selected={selectedLanguage === 'pt-BR'}
        onClick={() => handleChangeLanguage('pt-BR')}
      >
        Portugues
      </Button>
      <Button
        selected={selectedLanguage === 'en-US'}
        onClick={() => handleChangeLanguage('en-US')}
      >
        Ingles
      </Button>
    </Container>
  );
}
