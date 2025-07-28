import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Provider } from 'react-redux';

import Favorites from '../favorites/favoritesCounter';
import store from '../../store/store';

import './header.css';

import logo from '../../assets/logo.png';

const Header = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    const navLinkClassName = ({ isActive }) =>
        'navLink' + (isActive ? ' active' : '');

    return (
        <header className="header">
            {!isHomePage ? (
                <div className="logo">
                    <NavLink to="/">
                        <img src={logo} alt="Logo" />
                    </NavLink>
                </div>
            ) : (
                <img src={logo} alt="Logo" />
            )}
            <nav className="nav">
                <ul className="navList">
                    <li className="navItem">
                        <NavLink to="/products/" className={navLinkClassName}>
                            Товари
                        </NavLink>
                    </li>
                    <li className="navItem">
                        <NavLink to="/services/" className={navLinkClassName}>
                            Послуги
                        </NavLink>
                    </li>
                    <li className="navItem">
                        <NavLink to="/events/" className={navLinkClassName}>
                            Події
                        </NavLink>
                    </li>
                    <li className="navItem">
                        <NavLink to="/meetings/" className={navLinkClassName}>
                            Зустрічі
                        </NavLink>
                    </li>
                    <li className="navItem">
                        <NavLink to="/forum/" className={navLinkClassName}>
                            Форум
                        </NavLink>
                    </li>
                    <li className="navItem">
                        <NavLink to="/about/" className={navLinkClassName}>
                            Про нас
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <Provider store={store}>
                <Favorites />
            </Provider>
        </header>
    );
};

export default Header;
