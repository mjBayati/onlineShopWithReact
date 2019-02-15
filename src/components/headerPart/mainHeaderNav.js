import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink}
 from 'reactstrap';

export default class MainHeaderNav extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="p-0">
        <Navbar color="dark" light expand="md">
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mainNav p-0 m-0" navbar>
              <NavItem className="navItem">
                <NavLink href="/components/">صفحه اصلی</NavLink>
              </NavItem>
              <NavItem className="navItem">
                <NavLink href="/components/">پشتیبانی</NavLink>
              </NavItem>
              <NavItem className="navItem">
                <NavLink href="/components/">پیگیری سفارشات</NavLink>
              </NavItem>
              <NavItem className="navItem">
                <NavLink href="/components/">درباره ما</NavLink>
              </NavItem>
              <NavItem className="navItem">
                <NavLink href="/components/">تماس با ما</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
