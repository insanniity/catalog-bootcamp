import React, { useEffect, useState } from 'react';
import {View, Text, ScrollView, Image, Modal, TextInput, ActivityIndicator, TouchableOpacity, Alert} from 'react-native';
import { admin, form, text, theme } from '../../../styles';
import arrow from '../../../assets/images/seta-esq.png';
import { createProduct, getCategories, uploadImage } from '../../../services';
import Toast from 'react-native-tiny-toast';
import { TextInputMask } from "react-native-masked-text";
import * as ImagePicker from 'expo-image-picker';

interface FormProps {
    setScreen:Function;
}

const FormProduct: React.FC<FormProps> = (props) => {   
    const { setScreen } = props;
    const [loading, setLoading] = useState(false);
    const [categories, setCategories] = useState([]);
    const [showCategories, setShowCategories] = useState(false);
    const [product, setProduct] = useState({
        name: "",
        description: "", 
        imgUrl: "",
        price: "",
        categories: [],
    });
    const [image, setImage] = useState("");

    useEffect(() => {
        async () =>{
            const {status} = await ImagePicker.requestCameraRollPermissionsAsync();
            if(status != 'granted'){
                Alert.alert("Precisamos de acesso asua biblioteca de imagens!");
            }
        }
    }, []);

    async function selecImage() {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect:[1,1],
            quality: 1,
        });
        !result.cancelled && setImage(result.uri);
    }

    async function handleUpload() {
        uploadImage(image).then((res) => {
            const {uri} = res?.data;
        });
    }

    useEffect(()=>{
        image ? handleUpload() : null
    }, [image]);
    

    async function handleSave(){
        setLoading(true);
        const cat = replaceCategory();
        const data = {...product,price:getRaw(), categories: [{id: cat}] };
        try{
            await createProduct(data);
            setScreen("products");
            Toast.showSuccess("Produto salvo!");           
        }catch(res){ Toast.show("Erro ao salvar!")}
        setLoading(false);
    }

    function replaceCategory(){
        const cat = categories.find(category => category.name === product.categories);
        return cat.id;
    }

    async function loadCategories() {
        setLoading(true);
        const res = await getCategories();
        setCategories(res.data.content);
        setLoading(false);
    }

    function getRaw(){
        const str= product.price;
        const res = str.slice(2).replace(/\./g, "").replace(/,/g, ".");
        return res;
    }

    useEffect(()=>{
        loadCategories();
    },[]);

    return(
        <View style={form.container}>
            {loading ?  (<ActivityIndicator size="large" />) : (
                <View style={form.card}>
                    <ScrollView>
                        <Modal visible={showCategories} animationType="fade" transparent={true} presentationStyle="overFullScreen">
                            <View style={form.modalContainer}>
                                <ScrollView contentContainerStyle={form.modalContent}>
                                    {
                                        categories.map(cat => (
                                            <TouchableOpacity style={form.modlaItem} key={cat.id} onPress={()=>{
                                                    setProduct({...product, categories: cat.name})
                                                    setShowCategories(!showCategories);
                                                }}>
                                                <Text>{cat.name}</Text>
                                            </TouchableOpacity>
                                        ))
                                    }
                                </ScrollView>
                            </View>
                        </Modal>
                        <TouchableOpacity style={theme.goBackContainer} onPress={() => setScreen("products")}>
                            <Image source={arrow}/>
                            <Text style={text.goBack}>Voltar</Text>
                        </TouchableOpacity>
                        <TextInput placeholder="Nome do produto" style={form.input} value={product.name} onChangeText={(e) => setProduct({...product, name: e})}/>
                        <TouchableOpacity onPress={() => setShowCategories(!showCategories)} style={form.selectInput}>
                            <Text>
                                {
                                    product.categories.length === 0 ? "Escolha uma categoria" : product.categories
                                }
                            </Text>
                        </TouchableOpacity>                        
                        <TextInputMask type={"money"} placeholder="Preço" style={form.input} value={product.price} onChangeText={(e) => setProduct({...product, price: e})}/>

                        <TouchableOpacity activeOpacity={0.8} style={form.btnUpload} onPress={selecImage}>
                            <Text style={form.txtUpload}>Carregar imagem</Text>
                        </TouchableOpacity>
                        <Text style={form.txtFileSize}>As imagens deven estar no format JPEG ou PNG com no maximo 5mb</Text>
                        {
                            image != "" && (<TouchableOpacity onPress={selecImage} activeOpacity={0.8} style={{width: "100%", height:150, borderRadius:10, marginVertical: 10}}><Image source={{uri:image}} style={{width:"100%", height: "100%", borderRadius: 10,}}/></TouchableOpacity>)
                        }
                        <TextInput multiline placeholder="Descriçao" style={form.textInput} value={product.description} onChangeText={(e) => setProduct({...product, description: e})}/>
                        <View style={admin.buttonContainer}>
                            <TouchableOpacity style={admin.btnExcluir}><Text style={admin.textBtnExcluir} onPress={() => {Alert.alert("Deseja cancelar?", "Os dados inseridos não serão salvos", [{text: "Voltar", style:"cancel"}, {"text": "Confirmar", onPress: () => setScreen("products"), style: "default",}])}}>Cancelar</Text></TouchableOpacity>
                            <TouchableOpacity style={admin.btnSave}><Text style={admin.textBtnSave} onPress={() => handleSave()}>Salvar</Text></TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
            )}
        </View>
    );
};

export default FormProduct;