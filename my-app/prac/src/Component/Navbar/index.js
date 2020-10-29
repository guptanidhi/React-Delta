import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import style from './style.module.scss'

const menuJson = [{
    id : 1,
    name: 'Home'
},{
    id : 2,
    name: 'Platforms'
},{
    id : 3,
    name: 'Services'
},{
    id : 4,
    name: 'Solutions'
},{
    id : 5,
    name: 'Contacts'
}]

function NavbarCustom(props) {
    return <Navbar expand="lg" className={style.darkBg}>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end"> 
            <Nav>
                {menuJson.map((menu)=>{
                    return (
                        <Nav.Link className={style.menu} id={menu.id}>{menu.name}</Nav.Link>
                    )
                })}
                
            </Nav>
            </Navbar.Collapse>
        </Navbar>
}

export default NavbarCustom
