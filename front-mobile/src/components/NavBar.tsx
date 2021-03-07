import React, { useEffect, useState } from 'react';
import menu from '../assets/images/menu.png';
import { View , Image, Text} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { navBar } from '../styles';
import {  TouchableNativeFeedback } from 'react-native-gesture-handler';
import { doLogout, isAuthenticated } from '../services/auth';

const NavBar: React.FC =() =>{
    const [show, setShow] = useState(false);
    const navigation = useNavigation();
    const route = useRoute(); 
    const [autehnticated, setAuthenticated] = useState(false);  

    function navigate(path:any){
        if(path){            
            setShow(false);
            navigation.navigate(path);
            path = null;           
        }
        setShow(false);
    }

    async function logged(){
        const result = await isAuthenticated();
        result ? setAuthenticated(true) : setAuthenticated(false);
    }

    useEffect(()=>{
        logged();
    },[]);


    function logout() {
        doLogout();
        navigation.navigate("Admin");
    }

    return(
        <View style={navBar.container}>  
                <TouchableNativeFeedback  onPress={()=> setShow(!show)}>
                    <Image source={menu}  style={navBar.drawer}/>
                    {show ? (
                        <View style={navBar.options}>
                            <TouchableNativeFeedback style={navBar.option} onPress={() => navigate("Home")}>
                                <Text style={[navBar.textOption, route.name === "Home" ? navBar.textActive : null]}>Home</Text>  
                            </TouchableNativeFeedback>

                            <TouchableNativeFeedback style={navBar.option} onPress={() => navigate("Catalog")}>
                                <Text style={[navBar.textOption, route.name === "Catalog" ? navBar.textActive : null]}>Catalog</Text>                        
                            </TouchableNativeFeedback>

                            <TouchableNativeFeedback style={navBar.option} onPress={() => navigate("Admin")}>
                                <Text style={[navBar.textOption, route.name === "Adm" ? navBar.textActive : null]}>ADM</Text>                        
                            </TouchableNativeFeedback>
                            { autehnticated && (
                                <TouchableNativeFeedback onPress={()=> logout()} style={navBar.btnSair}>
                                    <Text style={navBar.txtSair}>Sair</Text>
                                </TouchableNativeFeedback>                                
                            ) }

                        </View>
                    ):null}            
                </TouchableNativeFeedback>   
        </View>
    );
};

export default NavBar;