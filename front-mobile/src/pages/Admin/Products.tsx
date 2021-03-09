import React, { useEffect, useState } from 'react';
import {View, Text, ScrollView, TouchableOpacity, ActivityIndicator} from 'react-native';
import { admin, theme } from '../../styles';

import {SearchInput, ProductCard} from '../../components';
import { deleteProduct, getProducts } from '../../services';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';

interface ProductProps{
    setScreen:Function;
}

const Products: React.FC<ProductProps> = (props) => {
    const [search, setSearch] = useState("");
    const [products, setProducts] = useState([]);
    const [load, setLoad] = useState(false);
    const { setScreen } = props;

    async function fillProducts(){
        setLoad(true);
        const res = await getProducts();
        setProducts(res.data.content);
        setLoad(false);
    }

    async function handleDelete(id:number) {
        setLoad(true);
        const res = await deleteProduct(id);
        fillProducts();
    }

    useEffect(() => {
        fillProducts();
    }, [])
    
    const data = search.length > 0 ? products.filter(product => product.name.toLowerCase().includes(search.toLowerCase())) : products;

    return(
        <ScrollView contentContainerStyle={admin.container}>
            <TouchableOpacity style={admin.addButton}><Text style={admin.textAddButton} onPress={() =>  setScreen("newProduct")}>Adicionar</Text></TouchableOpacity>
            <SearchInput placeholder="Nome do produto" search={search} setSearch={setSearch}/>
            {   load ? (<ActivityIndicator size="large"/>) :
                (data.map((product) => {
                    const {id} = product;
                    return(<ProductCard {...product} key={id} role="admin" handleDelete={handleDelete} />)
                }))
            }      
        </ScrollView>
    );
};

export default Products;