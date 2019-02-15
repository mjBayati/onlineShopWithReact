import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem}
 from 'reactstrap';

export default class SubHeader extends React.Component {
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
      <div className="p-0 m-0 w-100" id="subHeader">
        <Navbar className="py-0 m-0" color="light" light expand="md">
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto subNav p-0 m-0" navbar>
                <UncontrolledDropdown className="navItem flex-row-reverse" nav inNavbar>
                    <DropdownToggle nav caret>
                        دسته بندی ها
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem>
                            Option 1
                        </DropdownItem>
                        <DropdownItem>
                            Option 2
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
              <NavItem className="navItem">
                <NavLink href="/components/">فروش ویژه</NavLink>
              </NavItem>
              <NavItem className="navItem">
                <NavLink href="/components/">آخرین محصولات</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
