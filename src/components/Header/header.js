import React from 'react'
import {Link} from 'react-router-dom'
// 
import SideNav from './SideNav/sideNav'
// 
import style from './header.scss'
// 
import FontAwesome from 'react-fontawesome';

const Header = (props) => {

    const logo = () => {
        return (
            <Link to="/" className={style.logo}>
                <img src="/images/nba_logo.png" alt="logo" />
            </Link>
        )
    };

    const navBar = () => {
        return (
            <div>
                <FontAwesome 
                    name="bars"
                    onClick={props.onOpenNav}
                    className={style.navToggle}  
                />
            </div>
        )
    };

    return (
        <header className={style.header} >
            <SideNav {...props} />
            <div className={style.headerOpt} >
                {navBar()}
                {logo()}
            </div>
        </header>
    )
};

export default Header