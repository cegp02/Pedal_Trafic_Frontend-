import React from "react";
import Nav from 'react-bootstrap/Nav';
import { Link, NavLink } from "react-router-dom";


function MenuNav() {

  return (
    <Nav fill variant="tabs" defaultActiveKey="/home">
    <Nav.Item>
      <NavLink href="nav-link" to="/">Inicio</NavLink>
    </Nav.Item>
    <Nav.Item>
      <NavLink eventKey="nav-link" to="/contacto">Contacto</NavLink>
    </Nav.Item>
    <Nav.Item>
      <NavLink eventKey="nav-link" to="/reservation">Reservation</NavLink>
    </Nav.Item>
    <Nav.Item>
      <NavLink eventKey="nav-link" to="disabled" disabled>
        Disabled
      </NavLink>
    </Nav.Item>
  </Nav>
);

}export{MenuNav}