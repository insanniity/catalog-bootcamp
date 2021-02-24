import React from 'react';
import { Switch } from 'react-router-dom';
import Navbar from './components/NavBar';
import Products from './components/Products';
import './styles.scss';
import PrivateRoute from 'core/components/Routes/PrivateRoute';

const Admin = () => (
    <div className="admin-container">
        <Navbar />
        <div className="admin-content">
            <Switch>
                <PrivateRoute path="/admin/products">
                    <Products />
                </PrivateRoute>
                <PrivateRoute path="/admin/categories">
                    <h1>categorias</h1>
                </PrivateRoute>
                <PrivateRoute path="/admin/users" allowedRoutes={['ROLE_ADMIN']}>
                    <h1>users</h1>
                </PrivateRoute>                
            </Switch>
        </div>
    </div>    
);

export default Admin;