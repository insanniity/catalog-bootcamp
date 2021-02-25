import ProductPrice from 'core/components/ProductPrice';
import React from 'react';
import './styles.scss';

const Card = () =>{
    

    return(
        <div className="card-base product-admin-card">            
            <div className="row">
                <div className="col-2 text-center border-right py-3 px-1">
                    <img src="https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/3-big.jpg" alt="" className="product-card-admin-image" />
                </div>
                <div className="col-7 py-3">
                    <h3 className="product-admin-card-title">Computador Desktop - Intel Core i7</h3>
                    <ProductPrice price={40.50} />
                    <div className="mt-3">
                        <span className="badge badge-pill badge-secondary mr-1">Cat 1</span>
                        <span className="badge badge-pill badge-secondary mr-1">Cat 2</span>
                    </div>
                </div>
                <div className="col-3 pt-3 pr-5">
                    <div className="btn btn-outline-secondary btn-block border-radius-10 mb-4 btn-edit">EDITAR</div>
                    <div className="btn btn-outline-danger btn-block border-radius-10">APAGAR</div>
                </div>
            </div>            
        </div>
    )
}

export default Card;