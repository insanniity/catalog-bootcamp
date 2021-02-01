import React from 'react';
import { Route, Switch } from 'react-router-dom';

const Products = () => {
    return (
        <div>
            <Switch>
                <Route path="/admin/products" exact>
                    <h1>Lista de produtos</h1>
                </Route>
                <Route path="/admin/products/create">
                    <h1>Criar produto</h1>
                </Route>
                <Route path="/admin/products/:productId">
                    <h1>Editar produto</h1>
                </Route>      
            </Switch>   
        </div>
    );
}

export default Products;