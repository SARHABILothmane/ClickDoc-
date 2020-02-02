import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
// import logo from '../assets/img/logo.svg'; // with import

import logo from '../../assets/img/logo.svg'; // with import

import { Navbar, Nav } from 'react-bootstrap'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function NavbarPAtient(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="fixed" style={{ background: '#6ab2d8' }}>
                <Toolbar className="d-flex justify-content-between">
                 
                    <Typography variant="h6" className="">
                        mr. 
                        {props.donneUser.nom}
          </Typography>
                    <img src={logo}
                        width="40"
                        height="40"
                        className="d-inline-block align-top"
                    />
                    <Navbar bg="transparent" expand="lg">
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />

                        <Navbar.Collapse id="basic-navbar-nav">
                           
                            <Nav className="mr-auto ">
                                <ul className="list-unstyled d-flex navtop">
                                    <li>
                                        <Link to="/patient" >Accueil</Link>
                                    </li>
                                    <li>
                                        <Link to="/patient/medecin">Recherche</Link>
                                    </li>
                                    <li>
                                        <Link to="/patient/rendez-vous">rendez-vous</Link>
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
