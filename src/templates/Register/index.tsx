import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import {
  Container, NavBar, ProcessBar, NavBarItem, Content,
} from './styles';

export default function TemplateRegister() {
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
      <NavBar>
        <ProcessBar width={handleWidthProcessBar()} />

        <NavBarItem selected={handleSelected('user')} finished={handleFinished('user')}>
          <span>1</span>
          Usuário
        </NavBarItem>
        <NavBarItem selected={handleSelected('validation')} finished={handleFinished('validation')}>
          <span>2</span>
          Validação
        </NavBarItem>
        <NavBarItem selected={handleSelected('company')} finished={handleFinished('company')}>
          <span>3</span>
          Empresa
        </NavBarItem>
        <NavBarItem selected={handleSelected('documents')} finished={handleFinished('documents')}>
          <span>4</span>
          Documentos
        </NavBarItem>
        <NavBarItem selected={handleSelected('confirmation')} finished={handleFinished('confirmation')}>
          <span>5</span>
          Confirmação
        </NavBarItem>
      </NavBar>

      <Content className="App">
        <Outlet />
      </Content>
    </Container>
  );
}
