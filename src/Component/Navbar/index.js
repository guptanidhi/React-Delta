import React from 'react';
import {Navbar, Nav, Button, Image} from 'react-bootstrap';
import style from './style.module.scss'
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
    return <Navbar expand="lg" className={style.darkBg}>
            <Navbar.Brand href="#home">
              <Image src={Logo} />  
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className={style.menuWrapper}> 
            <Nav className={`${style.menulist} mr-auto ml-auto`}>
                {menuJson.map((menu)=>{
                    return (
                        <Nav.Link className={style.menu} id={menu.id}>{menu.name}</Nav.Link>
                    )
                })}
            </Nav>
            <Nav className={style.menulist}>
               <Button variant="outline-light">Create Free Account</Button>
                <Nav.Link href="#memes" className={style.menu}>
                    Login
                </Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
}

export default NavbarCustom
