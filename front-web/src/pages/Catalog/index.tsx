import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './components/ProductCard';
import './styles.scss';
import { makeRequest } from '../../core/utils/request';
import { ProductsResponse } from '../../core/types/product';
import ProductCardLoader from './components/ProductCardLoader';

const Catalog = () => {

    const [producResponse, setProductResponse] = useState<ProductsResponse>();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(()=>{
        const params ={
            page:0,
            linesPerPage: 12,
        }
        setIsLoading(true);
        makeRequest({url:'/products', params})        
        .then(response => setProductResponse(response.data))
        .finally(()=> {setIsLoading(false)});
    }, [] );

    return (
        <div className="catalog-container">
            <h1 className="catalog-title">Catalogo de produtos</h1>
            <div className="catalog-products">
                {isLoading ? <ProductCardLoader /> : (
                    producResponse?.content.map(product => (
                        <Link to={`/products/${product.id}`} key={product.id}>
                            <ProductCard product={product} />
                        </Link>
                    ))
                )}
                
            </div>
        </div>
    );
};

export default Catalog;