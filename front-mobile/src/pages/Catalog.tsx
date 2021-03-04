import React, { useState, useEffect} from 'react';
import { ProductCard, SearchInput } from '../components';
import { ScrollView , ActivityIndicator} from 'react-native';
import { theme } from '../styles';
import { api } from '../services';

const Catalog:React.FC = () => {
    const [search, setSearch] = useState("");
    const [products, setProducts] = useState([]);
    const [load, setLoad] = useState(false);


    async function fillProducts(){
        setLoad(true);
        const res = await api.get(`/products`);
        setProducts(res.data.content);
        setLoad(false);
    }

    useEffect(() => {
        fillProducts();
    }, [])

    const data = search.length > 0 ? products.filter(product => product.name.toLowerCase().includes(search.toLowerCase())) : products;
    return (
        <ScrollView contentContainerStyle={theme.scrollCOntainer}>
            <SearchInput placeholder="Nome do produto" search={search} setSearch={setSearch}/>
            {   load ? (<ActivityIndicator size="large"/>) :
                (data.map(product =>(<ProductCard {...product} key={product.id} />)))
            }            
        </ScrollView>
    )
}

export default Catalog;