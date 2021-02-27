import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './components/ProductCard';
import './styles.scss';
import { makeRequest } from 'core/utils/request';
import { ProductsResponse } from 'core/types/product';
import ProductCardLoader from './components/Loaders/ProductCardLoader';
import Pagination from 'core/components/Pagination';
import FiltersBar, { FilterForm } from 'core/components/FiltersBar';

const Catalog = () => {

    const [producResponse, setProductResponse] = useState<ProductsResponse>();
    const [isLoading, setIsLoading] = useState(false);
    const [activePage, setActivePage] = useState(0);

    const getProducts = useCallback((filter?: FilterForm) => {
        const params ={
            page:activePage,
            linesPerPage: 12,
            name: filter?.name,
            categoryId: filter?.categoryId,
        }
        setIsLoading(true);
        makeRequest({url:'/products', params})        
        .then(response => setProductResponse(response.data))
        .finally(()=> {setIsLoading(false)});
    }, [activePage]);

    useEffect(()=>{
        getProducts();
    }, [getProducts] );

    return (
        <div className="catalog-container">
            <div className="row">
                <div className="col-2">
                    <h1 className="catalog-title">Catalogo de produtos</h1>
                </div>
                <div className="col-10">
                    <FiltersBar onSearch={filter => getProducts(filter)} />
                </div>
            </div>
            <div className="catalog-products">
                {isLoading ? <ProductCardLoader /> : (
                    producResponse?.content.map(product => (
                        <Link to={`/products/${product.id}`} key={product.id}>
                            <ProductCard product={product} />
                        </Link>
                    ))
                )}                
            </div>
            {producResponse && (<Pagination totalPages={producResponse.totalPages} activePage={activePage} onChange={page => setActivePage(page)}/>)}
        </div>
    );
};

export default Catalog;