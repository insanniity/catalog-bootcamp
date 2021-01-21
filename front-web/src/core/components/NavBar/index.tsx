import React from 'react';
import './styles.scss';

const Navbar = () => (
    <nav className="row bg-primary main-nav" >
        <div className="col-2">
            <a href="link" className="nav-logo-text">
                <h4>Catalog</h4>
            </a>
        </div>
        <div className="col-6 offset-2">
            <ul className="main-menu">
                <li>
                    <a href="link" className="active">Home</a>
                </li>
                <li>
                    <a href="link">Catalogo</a>
                </li>
                <li>
                    <a href="link">Admin</a>
                </li>
            </ul>
        </div>

    </nav>
);

export default Navbar