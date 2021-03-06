import ProductPrice from 'core/components/ProductPrice';
import { Product } from 'core/types/product';
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

type Props = {
    product:Product;
    onRemove: (productId:number) => void;
}



const Card = ({product, onRemove}:Props) =>{  
    return(
        <div className="card-base product-admin-card"> 
            <div className="text-center border-right py-3 px-1 border-img">
                <img src={product.imgUrl} alt={product.name} className="product-card-admin-image" />
            </div>
            <div className="card-content">
                <h3 className="product-admin-card-title">{product.name}</h3>
                <ProductPrice price={product.price} />
                <div className="mt-3">
                {product.categories.map(category => (
                    <span className="badge badge-pill badge-secondary mr-1" key={category.id}>{category.name}</span>
                ))}                     
                </div>
            </div>
            <div className="btn-container">
                <Link to={`/admin/products/${product.id}`} className="btn btn-outline-secondary btn-block border-radius-10 mb-4 btn-edit btn-product">EDITAR</Link>
                <button className="btn btn-outline-danger btn-block border-radius-10 btn-product" onClick={() =>onRemove(product.id)}>APAGAR</button>
            </div>   
        </div>
    )
}

export default Card;