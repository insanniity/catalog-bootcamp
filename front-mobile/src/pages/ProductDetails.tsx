import React from 'react';
import { View, Text, ActivityIndicator ,TouchableOpacity, Image, ScrollView} from 'react-native';
import { useEffect, useState } from 'react';
import { api } from '../services';
import arrow from '../assets/images/seta-esq.png';
import { text, theme } from '../styles';
import {useNavigation} from '@react-navigation/native';



const ProductDetails = ({route:{params:{id}}}) => {
    const navigation = useNavigation();

    const [product, setProduct] = useState({
        id: null,
        name: null,
        description: null,
        price: null,
        imgUrl: null,
        date: null,
        categories: [],
    });
    const [load, setLoad] = useState(false);

    async function loadProducData() {
        setLoad(true);
        const res = await api.get(`products/${id}`);
        setProduct(res.data);
        setLoad(false);
    }

    useEffect(()=> {
        loadProducData();
    }, []);


    return (
        <View style={theme.detailContainer}>
            { load ? (<ActivityIndicator size="large" />) : (
                <View style={theme.detailCard}>
                    <TouchableOpacity style={theme.goBackContainer} onPress={navigation.goBack}>
                        <Image source={arrow}/>
                        <Text style={text.goBack}>Voltar</Text>
                    </TouchableOpacity>
                    <View style={theme.prodructCardImageContainer}>
                        <Image source={{uri: product.imgUrl}} style={theme.producCardtImage}/>
                    </View>
                    <Text style={text.producDetailName}>
                        {product.name}
                    </Text>
                    <View style={theme.priceContainer}>
                        <Text style={text.productCurrency}>R$</Text>
                        <Text style={text.productPrice}>{product.price}</Text>
                    </View>
                    <ScrollView style={theme.scrollTextContainer}>
                        <Text style={text.productionDescription}>{product.description}</Text>
                    </ScrollView>
                </View>
            )}
        </View>
    )
}

export default ProductDetails;