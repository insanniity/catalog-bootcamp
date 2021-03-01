import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import menu from 'core/assets/images/menu.svg';
import { Dropdown } from 'react-bootstrap';
import './styles.scss';
import { getAccessTokenDecoded, isAuthenticated, logout } from 'core/utils/auth';

const Navbar = () => {
    const [drawerActive, setDrawerActive] = useState(false);
    const [currentUser, setCurrentUser] = useState('');
    const location = useLocation();

    useEffect(() => {
        const currentUserData = getAccessTokenDecoded();
        setCurrentUser(currentUserData.user_name);
    }, [location]);

    const handleLogout = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        setDrawerActive(false);
        logout();
    }

    return (
    <nav className="bg-primary main-nav" >
        
        <Link to="/" className="nav-logo-text">
            <h4>Catalog</h4>
        </Link>

        <button className="menu-mobile-btn" type="button" onClick={() => setDrawerActive(!drawerActive) }>
            <img src={menu} alt="Mobile Menu" />
        </button>
        
        <div className={drawerActive ? "menu-mobile-container" : "menu-container"}>
            <ul className="main-menu">
                <li>
                    <NavLink to="/" exact className="nav-link" onClick={() => setDrawerActive(false)}>HOME</NavLink>
                </li>
                <li>
                    <NavLink to="/products" className="nav-link" onClick={() => setDrawerActive(false)}>CATÁLOGO</NavLink>
                </li>
                {isAuthenticated() && (
                    <li>
                        <NavLink to="/admin" className="nav-link" onClick={() => setDrawerActive(false)}>ADMIN</NavLink>
                    </li>
                )}
                { drawerActive && (
                    <li>
                        {isAuthenticated() && (
                            <a href="#logou" className="nav-link active d-inline" onClick={handleLogout}> SAIR - {currentUser}</a>
                        )}
                    </li>
                )}

                {drawerActive && (
                    <>
                        {!isAuthenticated() && (
                            <li>
                                <Link to="/auth/login" className="nav-link active" onClick={() => setDrawerActive(false)}>LOGIN</Link>
                            </li>
                        )}
                    </>
                )}

            </ul>
        </div>
        <div className="user-info-dnone text-right">
            {isAuthenticated() && (
                <Dropdown>
                    <Dropdown.Toggle variant="none" className="dp-menu">
                        {currentUser}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>                   
                    </Dropdown.Menu>
                </Dropdown>
            )} 
            
            {!isAuthenticated() && (
                <Link to="/auth/login" className="nav-link active">Login</Link>
            )} 
        </div>
    </nav>
)};

export default Navbar