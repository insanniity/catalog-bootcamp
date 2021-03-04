import React from 'react';

import {View, Text, TouchableOpacity, ImageSourcePropType, Image} from "react-native";
import { text, theme } from '../styles';
import {useNavigation} from "@react-navigation/native";

interface ProductProps{
    id: Number;
    name: String;
    imgUrl: ImageSourcePropType;
    price: Number;
}

const ProductCard: React.FC<ProductProps> = ({id, name, imgUrl, price}) => {
    const navigation = useNavigation();

    return(
        <TouchableOpacity style={theme.productCard} onPress={() => navigation.navigate("ProductDetails", {id})}>
            <Image source={{uri: imgUrl}} style={theme.productImage}/>
            <View style={theme.productDescription}>
                <Text style={text.productName}>{name}</Text>
                <View style={theme.priceContainer}>
                    <Text style={text.productCurrency}>R$</Text>
                    <Text style={text.productPrice}>{price}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ProductCard;