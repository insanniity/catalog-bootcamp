import React, { useState } from 'react';
import {View, Text, ScrollView, Image, Modal, TextInput, ActivityIndicator, TouchableOpacity} from 'react-native';
import { admin, form, text, theme } from '../../../styles';
import arrow from '../../../assets/images/seta-esq.png';

interface FormProps {
    setScreen:Function;
}

const FormProduct: React.FC<FormProps> = (props) => {   
    const { setScreen } = props;
    const [loading, setLoading] = useState(false);
    const [edit, setEdit] = useState(false);
    const [categories, setCategories] = useState([
        {
            id: 3,
            name: "Computers",
        },
        {
            id: 2,
            name: "Peças",
        }
    ]);
    const [showCategories, setShowCategories] = useState(false);
    const [product, setProduct] = useState({
        name: null,
        description: null, 
        imgUrl: null,
        price: null,
        categories: null,
    });

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
                        <TextInput placeholder="Nome do produto" style={form.input}/>
                        <TouchableOpacity onPress={() => setShowCategories(!showCategories)} style={form.selectInput}>
                            <Text>
                                {
                                    product.categories === null ? "Escolha uma categoria" : product.categories
                                }
                            </Text>
                        </TouchableOpacity>
                        <TextInput placeholder="Preço" style={form.input} />
                        <TouchableOpacity activeOpacity={0.8} style={form.btnUpload}>
                            <Text style={form.txtUpload}>Carregar imagem</Text>
                        </TouchableOpacity>
                        <Text style={form.txtFileSize}>As imagens deven estar no format JPEG ou PNG com no maximo 5mb</Text>
                        <TextInput multiline placeholder="Descriçao" style={form.textInput}/>
                        <View style={admin.buttonContainer}>
                            <TouchableOpacity style={admin.btnExcluir}><Text style={admin.textBtnExcluir}>Cancelar</Text></TouchableOpacity>
                            <TouchableOpacity style={admin.btnSave}><Text style={admin.textBtnSave}>Salvar</Text></TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
            )}
        </View>
    );
};

export default FormProduct;