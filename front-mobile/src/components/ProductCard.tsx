import React from 'react';

import {View, Text, TouchableOpacity, ImageSourcePropType, Image} from "react-native";
import { admin, text, theme } from '../styles';
import {useNavigation} from "@react-navigation/native";

import { TextInputMask } from "react-native-masked-text";

interface ProductProps{
    id: Number;
    name: String;
    imgUrl: string;
    price: string;
    role?: string;
    handleDelete: Function;
}

const ProductCard: React.FC<ProductProps> = ({id, name, imgUrl, price, role, handleDelete}) => {
    const navigation = useNavigation();

    return(
        <TouchableOpacity style={theme.productCard} onPress={() => role ? " ":navigation.navigate("ProductDetails", {id})}>
            <Image source={{uri: imgUrl}} style={theme.productImage}/>
            <View style={theme.productDescription}>
                <Text style={text.productName}>{name}</Text>
                <View style={theme.priceContainer}>
                    <Text style={text.productCurrency}>R$</Text>
                    <TextInputMask type={"money"} options={{
                        precision:2,
                        separator: ",",
                        delimiter: ".",
                        unit: "",
                        suffixUnit: "",
                    }}
                    value={price}
                    editable={false}
                    style={text.productPrice}
                    />                   
                </View>
                {
                    role==='admin' && (
                        <View style={admin.buttonContainer}>
                            <TouchableOpacity style={admin.btnExcluir}>
                                <Text style={admin.textBtnExcluir} onPress={() => handleDelete(id)}>Excluir</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={admin.btnEditar}>
                                <Text style={admin.textBtnEditar}>Editar</Text>
                            </TouchableOpacity>
                        </View>
                    )
                }

            </View>
        </TouchableOpacity>
    )
}

export default ProductCard;