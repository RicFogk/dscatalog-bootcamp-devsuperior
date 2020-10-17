import React from 'react';
import './styles.scss';

const Navbar = () => (
    <nav className="admin-class-container">
        <ul>
            <li>
                <a href="link" className="admin-nav-item active">Meus Produtos</a>
            </li>

            <li>
            <a href="link" className="admin-nav-item">Minhas Categorias</a>
            </li>

            <li>
            <a href="link" className="admin-nav-item">Meus Ususários</a>
            </li>
        </ul>
    </nav>
);

export default Navbar;