import React, { useEffect, useState } from 'react';
import {View, Text, ScrollView, TouchableOpacity, ActivityIndicator} from 'react-native';
import { admin, theme } from '../../styles';

import {SearchInput, ProductCard} from '../../components';
import { getProducts } from '../../services';

const Products: React.FC = () => {
    const [search, setSearch] = useState("");
    const [products, setProducts] = useState([]);
    const [load, setLoad] = useState(false);

    async function fillProducts(){
        setLoad(true);
        const res = await getProducts();
        setProducts(res.data.content);
        setLoad(false);
    }

    useEffect(() => {
        fillProducts();
    }, [])
    
    const data = search.length > 0 ? products.filter(product => product.name.toLowerCase().includes(search.toLowerCase())) : products;

    return(
        <ScrollView contentContainerStyle={admin.container}>
            <TouchableOpacity style={admin.addButton}><Text style={admin.textAddButton}>Adicionar</Text></TouchableOpacity>
            <SearchInput placeholder="Nome do produto" search={search} setSearch={setSearch}/>
            {   load ? (<ActivityIndicator size="large"/>) :
                (data.map(product =>(<ProductCard {...product} key={product.id} role="admin" />)))
            }      
        </ScrollView>
    );
};

export default Products;