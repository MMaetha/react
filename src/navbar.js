import React from 'react';
import {Nav, Navbar, NavItem, NavDropdown, MenuItem, Tabs, ButtonToolbar, Button, Table, ButtonGroup, Row, Col, Grid, Panel, FormGroup, FormControl} from 'react-bootstrap';

const navbarInstance = () => {
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">React-Bootstrap</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <NavItem eventKey={1} href="#">Home</NavItem>
        <NavItem eventKey={2} href="#">About</NavItem>
        <NavItem eventKey={3} href="#">Apps</NavItem>
        <NavItem eventKey={4} href="#">Contact Us</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  return <Navbar />;
}
