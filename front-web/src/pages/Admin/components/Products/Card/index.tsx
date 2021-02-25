import ProductPrice from 'core/components/ProductPrice';
import { Product } from 'core/types/product';
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

type Props = {
    product:Product;
}



const Card = ({product}:Props) =>{  
    return(
        <div className="card-base product-admin-card">            
            <div className="row">
                <div className="col-2 text-center border-right py-3 px-1">
                    <img src={product.imgUrl} alt={product.name} className="product-card-admin-image" />
                </div>
                <div className="col-7 py-3">
                    <h3 className="product-admin-card-title">{product.name}</h3>
                    <ProductPrice price={product.price} />
                    <div className="mt-3">
                    {product.categories.map(category => (
                        <span className="badge badge-pill badge-secondary mr-1" key={category.id}>{category.name}</span>
                    ))}                     
                    </div>
                </div>
                <div className="col-3 pt-3 pr-5">
                    <Link to={`/admin/products/${product.id}`} className="btn btn-outline-secondary btn-block border-radius-10 mb-4 btn-edit">EDITAR</Link>
                    <Link to={`/admin/products/${product.id}`} className="btn btn-outline-danger btn-block border-radius-10">APAGAR</Link>
                </div>
            </div>            
        </div>
    )
}

export default Card;