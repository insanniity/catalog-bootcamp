import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './components/ProductCard';
import './styles.scss';
import { makeRequest } from 'core/utils/request';
import { Category, ProductsResponse } from 'core/types/product';
import ProductCardLoader from './components/Loaders/ProductCardLoader';
import Pagination from 'core/components/Pagination';
import FiltersBar from 'core/components/FiltersBar';

const Catalog = () => {

    const [producResponse, setProductResponse] = useState<ProductsResponse>();
    const [isLoading, setIsLoading] = useState(false);
    const [activePage, setActivePage] = useState(0);
    const [name, setName] = useState('');
    const [category, setCategory] = useState<Category>();


    const getProducts = useCallback(() => {
        const params ={
            page:activePage,
            linesPerPage: 12,
            name,
            categoryId: category?.id,
        }
        setIsLoading(true);
        makeRequest({url:'/products', params})        
        .then(response => setProductResponse(response.data))
        .finally(()=> {setIsLoading(false)});
    }, [activePage, name, category]);

    useEffect(()=>{
        getProducts();
    }, [getProducts] );

    const handleChangeName = (name: string) => {
        setActivePage(0);
        setName(name);        
    }

    const handleChangeCategory = (category: Category) => {
        setActivePage(0);
        setCategory(category);        
    }

    const clearFilters = () => {
        setActivePage(0);
        setCategory(undefined);
        setName('');        
    }

    return (
        <div className="catalog-container">
            <div className="row">
                <div className="col-2">
                    <h1 className="catalog-title">Catalogo de produtos</h1>
                </div>
                <div className="col-10">
                    <FiltersBar 
                        name={name} 
                        category={category} 
                        handleChangeCategory={handleChangeCategory}
                        handleChangeName={handleChangeName}
                        clearFilters={clearFilters}
                    />
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