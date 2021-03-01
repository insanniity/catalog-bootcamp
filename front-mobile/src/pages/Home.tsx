import React from 'react';
import { Text, View, Image } from 'react-native';
import {useNavigation} from "@react-navigation/native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { theme , text} from '../styles';
import seta from '../assets/images/seta.png';
import desenho from '../assets/images/desenho.png';

const Home:React.FC = ( ) => {
    const navigation = useNavigation();

    return (
        <View style={theme.container}>
            <View style={theme.card}>
                <Image source={desenho} style={theme.draw}/>
                <View style={theme.textContainer}>
                    <Text style={text.bold}>
                        Conheça o melhor catálogo de produtos
                    </Text>
                    <Text style={text.regular}>
                        Ajudaremos você a encontrar os melhores produtos disponíveis no mercado.
                    </Text>                   
                </View>
                <TouchableOpacity style={theme.primaryButton} activeOpacity={0.8} onPress={() => navigation.navigate('Catalog')}>
                    <Text style={text.primaryText}>INICIE AGORA A SUA BUSCA</Text>
                    <View style={theme.arrowContainer}>
                        <Image source={seta} />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Home;