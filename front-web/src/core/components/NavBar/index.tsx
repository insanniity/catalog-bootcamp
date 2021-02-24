import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import './styles.scss';
import { getAccessTokenDecoded, logout } from 'core/utils/auth';

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
    <nav className="row bg-primary main-nav" >
        <div className="col-3">
            <Link to="/" className="nav-logo-text">
                <h4>Catalog</h4>
            </Link>
        </div>
        <div className="col-6">
            <ul className="main-menu">
                <li>
                    <NavLink to="/" exact className="nav-link">HOME</NavLink>
                </li>
                <li>
                    <NavLink to="/products" className="nav-link">CATÁLOGO</NavLink>
                </li>
                {currentUser && (
                    <li>
                        <NavLink to="/admin" className="nav-link">ADMIN</NavLink>
                    </li>
                )}
            </ul>
        </div>
        <div className="col-3 text-right nav-rigth">
            {currentUser && (
                <Dropdown>
                    <Dropdown.Toggle variant="none" className="dp-menu">
                        {currentUser}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>                   
                    </Dropdown.Menu>
                </Dropdown>
            )} 
            
            {!currentUser && (
                <Link to="/auth/login" className="nav-link active">Login</Link>
            )} 
        </div>
    </nav>
)};

export default Navbar