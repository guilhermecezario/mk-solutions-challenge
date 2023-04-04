import React from 'react';
import { Outlet, Link } from 'react-router-dom';

export default function TemplateRegister() {
  return (
    <div>
      <Link to="/register/user" style={{ marginRight: 10 }}>
        user
      </Link>
      <Link to="/register/validation" style={{ marginRight: 10 }}>
        validation
      </Link>
      <Link to="/register/company" style={{ marginRight: 10 }}>
        company
      </Link>
      <Link to="/register/documents" style={{ marginRight: 10 }}>
        documents
      </Link>
      <Link to="/register/confirmation" style={{ marginRight: 10 }}>
        confirmation
      </Link>

      <div className="App">
        <Outlet />
      </div>
    </div>
  );
}
