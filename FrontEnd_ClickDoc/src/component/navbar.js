import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import logo from '../assets/img/logo.svg'; // with import

import { Link } from "react-router-dom";

import { Navbar, Nav} from 'react-bootstrap'
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    
}));

export default function NavbarPublic(props) {
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            <AppBar position="static" style={{ background: '#6ab2d8' }}>
                <Toolbar className="d-flex justify-content-lg-between">
                    <div className="menu-sidebar">
                        <div id="nav_menu-2" className="sidebar-widget  widget_nav_menu">
                            <h3 className="sidebar-header">Vous êtes médecin ?</h3>
                            <div className="menu-menu-partie-gauche-container">
                                <ul id="menu-menu-partie-gauche" className="menu  list-unstyled d-flex navtop">
                                    <li id="menu-item-15686" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-15686 ml-5">
                                        <Link to="/public/professionnel-sante" >Vous êtes médecin ?</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                       <img src={logo}
                        width="40"
                        height="40"
                        className="d-inline-block align-top"
                     />
                    
                    <Navbar expand="lg" >
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />

                        <Navbar.Collapse id="basic-navbar-nav">
                            
                            <Nav className="mr-auto ">
                                <ul className="list-unstyled d-flex navtop">
                                    <li>
                                        <Link to="/public" >Accueil</Link>
                                    </li>
                                    <li>
                                        <Link to="/public/authentification-patient">Login</Link>
                                    </li>
                                    <li>
                                        <Link to="/public/inscription-patient">signup</Link>
                                    </li>
                                </ul>
                              
                            </Nav>
                          
                        </Navbar.Collapse>
                    </Navbar>
                </Toolbar>
            </AppBar>
        </div>
    );
}



