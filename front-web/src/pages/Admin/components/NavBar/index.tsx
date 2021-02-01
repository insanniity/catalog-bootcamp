import React from 'react';
import './styles.scss';

const Navbar = () =>(
    <nav className="admin-nav-container">
        <ul>
            <li><a href="#">Meus Produtos</a></li>
            <li><a href="#">Minhas categorias</a></li>
            <li><a href="#">Meus Usuários</a></li>
        </ul>
    </nav>
);

export default Navbar;