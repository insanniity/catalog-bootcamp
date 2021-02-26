import Pagination from 'core/components/Pagination';
import { ProductsResponse } from 'core/types/product';
import { makePrivateRequest, makeRequest } from 'core/utils/request';
import React, { useEffect, useState , useCallback} from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import Card from '../Card';




const List = () =>{
    const [producResponse, setProductResponse] = useState<ProductsResponse>();   
    const [isLoading, setIsLoading] = useState(false);
    const [activePage, setActivePage] = useState(0);
    const history = useHistory();

    const getProducts = useCallback(() => {
        const params ={
            page:activePage,
            linesPerPage: 5,
            direction: 'DESC',
            orderBy: 'id',
        }
        setIsLoading(true);
        makeRequest({url:'/products', params})        
            .then(response => setProductResponse(response.data))
            .finally(()=> {setIsLoading(false)});
    },[activePage])

    const handleCreate = () => {
        history.push('/admin/products/create');
    }

    useEffect(()=>{
        getProducts();
    }, [getProducts] );

    const onRemove = (productId: number) =>{
        const confirm = window.confirm('Deseja realmente apagar o produto?');
        if(confirm){
            makePrivateRequest({ url:`/products/${productId}`, method:'DELETE' })
                .then(() => {
                    toast.success('Produto apagado com sucesso!');
                    getProducts();                
                })
                .catch(() =>{
                    toast.error('Erro ao apagar produto!');
                });
        }
    }

    return(
        <div className="admin-products-list">
            <button className="btn btn-primary btn-lg" onClick={handleCreate}>ADICIONAR</button>
            <div className="admin-list-container">                
                {producResponse?.content.map(product=>(<Card product={product} key={product.id} onRemove={onRemove} />))}  
                {producResponse && (<Pagination totalPages={producResponse.totalPages} activePage={activePage} onChange={page => setActivePage(page)}/>)}              
            </div>
        </div>
    )
}

export default List;