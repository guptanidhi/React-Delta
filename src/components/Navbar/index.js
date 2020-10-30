import React from "react";
import PropTypes from 'prop-types'
import { Navbar, Nav, Button, Image } from "react-bootstrap";
import Grid from "../Grid";
import styles from "./navbar.module.scss";
import Logo from "../../img/logo.png";

function CustomNavbar({ navItems }) {
  return (
    <div className={styles.header}>
      <Grid>
        <Navbar expand="lg" className={styles.darkBg}>
          <Navbar.Brand href="#home">
            <Image src={Logo} />
          </Navbar.Brand>
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
              <Button variant="outline-light">Create Free Account</Button>
              <Nav.Link href="#memes" className={styles.menu}>
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Grid>
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
