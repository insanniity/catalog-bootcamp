import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import './styles.scss';
import { getAccessTokenDecoded, isAuthenticated, logout } from 'core/utils/auth';

const Navbar = () => {
    const [currentUser, setCurrentUser] = useState('');
    const location = useLocation();

    useEffect(() => {
        const currentUserData = getAccessTokenDecoded();
        setCurrentUser(currentUserData.user_name);
    }, [location]);

    const handleLogout = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        logout();
    }

    return (
    <nav className="bg-primary main-nav" >
        
        <Link to="/" className="nav-logo-text">
            <h4>Catalog</h4>
        </Link>
        
        <div className="menu-container">
            <ul className="main-menu">
                <li>
                    <NavLink to="/" exact className="nav-link">HOME</NavLink>
                </li>
                <li>
                    <NavLink to="/products" className="nav-link">CATÁLOGO</NavLink>
                </li>
                {isAuthenticated() && (
                    <li>
                        <NavLink to="/admin" className="nav-link">ADMIN</NavLink>
                    </li>
                )}
            </ul>
        </div>
        <div className="text-right">
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