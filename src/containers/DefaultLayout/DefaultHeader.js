import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Nav, NavItem, Navbar, NavbarBrand } from "reactstrap";
import PropTypes from "prop-types";

import logo from "../../assets/img/hmti.png";

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
  render() {
    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        {/* <AppSidebarToggler className="d-lg-none" display="md" mobile /> */}
        {/* <div className="pr-2 py-2 logo-hmti">
          <img src={logo} alt="Logo" height="70" />
        </div>
        <div className="">HMTI UIS</div> */}
        <Navbar className=" navbar container" expand="md">
          <NavbarBrand className="logo-hmti">
            <img className="logo" src={logo} alt="Logo" />
            <div className="info-logo">HMTI UIS</div>{" "}
          </NavbarBrand>
          <Nav className="nav-header" navbar>
            <NavItem className="beranda">
              <NavLink to="/dashboard" className="nav-link">
                Beranda
              </NavLink>
            </NavItem>
            <NavItem className="pengumuman">
              <NavLink to="pengumuman" className="nav-link">
                Pengumuman
              </NavLink>
            </NavItem>
            <NavItem className="tentang">
              <NavLink to="tentang" className="nav-link">
                Tentang
              </NavLink>
            </NavItem>
            <NavItem className="repository">
              <NavLink to="repository" className="nav-link">
                Repository
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
