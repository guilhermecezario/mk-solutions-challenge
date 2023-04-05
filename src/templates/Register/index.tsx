import React from 'react';
import { Outlet, Link } from 'react-router-dom';

import { Container, Content } from './styles';

export default function TemplateRegister() {
  return (
    <Container>
      <div>
        <Link to="/register/user">
          user
        </Link>
        <Link to="/register/validation">
          validation
        </Link>
        <Link to="/register/company">
          company
        </Link>
        <Link to="/register/documents">
          documents
        </Link>
        <Link to="/register/confirmation">
          confirmation
        </Link>
      </div>

      <Content className="App">
        <Outlet />
      </Content>
    </Container>
  );
}
