import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, Menu, MenuItem, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { ClassNames } from '@emotion/react';
import { Link } from 'react-router-dom';

import logo from '../../assets/imageFronte/143013969_102431831869300_13174374860634520_n.png';
import useStyles from './styles';

const Navbar = ({ totalItems}) => {
    const classes = useStyles();

    return (
        <>
            <AppBar position='fixed' className={ClassNames.appBar} color="inherit">
                <Toolbar>
                    <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
                        <img src={logo} alt="LokaLoca" height="25px" className={classes.image} />
                        Филмар
                    </Typography>
                    <div className={classes.grow} />
                    <Typography variant='h6' align='center' className={classes.title} >24/7 достава на пијалоци</Typography>
                    <div className={classes.button}>
                       
                        <IconButton component={Link} to="/cart" area-aria-label="Show cart items" color="inherit">
                            <Badge badgeContent={totalItems} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>

            </AppBar>
        
        </>
    );
};

export default Navbar;