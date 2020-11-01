import React from "react";
import PropTypes from 'prop-types'
import { Navbar, Nav, Button } from "react-bootstrap";
import styles from "./navbar.module.scss";
import Icon from '../Icon'

function CustomNavbar({ navItems }) {
  return (
    <div className={styles.header}>
        <Navbar expand="lg" className={styles.darkBg}>
        <Navbar.Brand href="#home" className={styles.logoText}>Delta Zone </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className={styles.menuWrapper}>
            <Nav className={`${styles.menulist} mr-auto ml-auto`}>
              {navItems.map((navItem) => (
                <Nav.Link key={navItem.id} className={styles.menu} id={navItem.id}>
                  {navItem.name}
                </Nav.Link>
              ))}
            </Nav>
            <Nav className={styles.menulist}>
              <div className={styles.searchBtn}>
                 <Icon icon="search"/>
              </div>
              
              <div className={styles.createBtn}>
                <Button variant="outline-light">Create Free Account <Icon icon="googlePlus"/></Button>
              </div>
              <Nav.Link href="#memes" className={styles.menu}>
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    </div>
  );
}

/** Props **/
CustomNavbar.defaultProps = {
	navItems: []
}

CustomNavbar.propTypes = {
	navItems: PropTypes.array
}

export default CustomNavbar;
