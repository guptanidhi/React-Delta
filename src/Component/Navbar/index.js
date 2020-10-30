import React from 'react';
import {Navbar, Nav, Button, Image} from 'react-bootstrap';
import Grid from '../Grid'
import styles from './styles.module.scss'
import Logo from '../../img/logo.png'

const menuJson = [{
    id : 1,
    name: 'Open Datasets'
},{
    id : 2,
    name: 'Statistical Rigor'
},{
    id : 3,
    name: 'Pricing'
},{
    id : 4,
    name: 'Consulting'
}]

function NavbarCustom(props) {
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
                {menuJson.map((menu)=>{
                    return (
                        <Nav.Link className={styles.menu} id={menu.id}>{menu.name}</Nav.Link>
                    )
                })}
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
                )
}

export default NavbarCustom
