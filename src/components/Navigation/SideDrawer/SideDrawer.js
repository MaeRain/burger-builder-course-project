import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux/Aux';

const sideDrawer = (props) => {
    let attachedClasses = [classes.sideDrawer, classes.Close];
    if (props.open) {
       attachedClasses = [classes.SideDrawer, classes.Open];
    }
    let attachedLogoClasses = [classes.logoClosed];
    if (props.open) {
       attachedLogoClasses = [classes.Logo];
    } //MY FIX******
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(' ')}>
                <div className={attachedLogoClasses.join(' ')}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    );
};

export default sideDrawer;
