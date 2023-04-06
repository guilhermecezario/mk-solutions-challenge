import React from 'react';
import { Outlet } from 'react-router-dom';

import { Container, Header, Image, Content } from './styles';

import NavBar from '../../components/NavBar';
import SwitchLocales from '../../components/SwitchLocales'

import Logo from '../../assets/mk-positive.svg';

export default function TemplateRegister() {
  return (
    <Container>
      <Header>
        <Image src={Logo} />

        <SwitchLocales/>
      </Header>

      <Content className="App">
        <NavBar/>

        <Outlet />
      </Content>
    </Container>
  );
}
