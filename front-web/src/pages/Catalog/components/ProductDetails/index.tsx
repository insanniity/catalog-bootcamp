import React from 'react';
import { useParams } from 'react-router-dom';
import './styles.scss';

type ParamsType = {
    productsId: string;
}

const ProductDetails = () => {
    const { productsId } = useParams<ParamsType>();
    console.log(productsId);
    return(
        <div className="prduct-details-container">
            ProductDetails
        </div>
    );    
};

export default ProductDetails;