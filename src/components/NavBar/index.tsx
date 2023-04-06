import React from 'react';
import { useLocation } from 'react-router-dom';

import { useTranslation } from 'react-i18next'

import {
  Container, ProcessBar, NavBarItem,
} from './styles';

export default function NavBar() {
  const { t } = useTranslation();

  const pathnames = ['user', 'validation', 'company', 'documents', 'confirmation'];

  const location = useLocation();

  function handleSelected(pathname: string) {
    return location.pathname.includes(pathname);
  }

  function handleFinished(pathname: string) {
    const index = pathnames.findIndex((e) => e === pathname);

    const indexCurrent = pathnames.findIndex((e) => location.pathname.includes(e));

    return index <= indexCurrent;
  }

  function handleWidthProcessBar(): string {
    const index = pathnames.findIndex((e) => location.pathname.includes(e));

    return `${(index + 1) * 20}%`;
  }

  return (
    <Container>
      <ProcessBar width={handleWidthProcessBar()} />

      <NavBarItem selected={handleSelected('user')} finished={handleFinished('user')}>
        <span>1</span>
        {t("User")}
      </NavBarItem>
      <NavBarItem selected={handleSelected('validation')} finished={handleFinished('validation')}>
        <span>2</span>
        {t("Validation")}
      </NavBarItem>
      <NavBarItem selected={handleSelected('company')} finished={handleFinished('company')}>
        <span>3</span>
        {t("Company")}
      </NavBarItem>
      <NavBarItem selected={handleSelected('documents')} finished={handleFinished('documents')}>
        <span>4</span>
        {t("Documents")}
      </NavBarItem>
      <NavBarItem selected={handleSelected('confirmation')} finished={handleFinished('confirmation')}>
        <span>5</span>
        {t("Confirmation")}
      </NavBarItem>
    </Container>
  );
}
