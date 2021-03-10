import React, { useEffect, useState } from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, TouchableOpacity, Image, TextInput} from 'react-native';
import { theme, login, text } from '../styles';
import eyeOpened from '../assets/images/eyes-opened.png';
import eyeClosed from '../assets/images/eyes-closed.png';
import arrow from '../assets/images/seta.png';
import { authLogin, isAuthenticated } from '../services/auth';

const Login: React.FC = () => {
    const [hidePassword, setHidePassword] = useState(true);
    const [userInfo, setUserInfo] = useState({
        username: "maria@gmail.com",
        password: "123456",
    });
    const navigation = useNavigation();
    const [userFetchData, setUserFetchData] = useState({});     

    async function handleLogin(){
        const data = await authLogin(userInfo);
        setUserFetchData(data);
        navigation.navigate("Dashboard");
    }

    return (
        <View style={theme.container}>
            <View style={login.card}>
                <Text style={login.title}>Login</Text>
                <View style={login.form}>
                    <TextInput 
                        placeholder="Email" 
                        autoCapitalize="none"
                        keyboardType="email-address"
                        style={login.textInput}
                        value={userInfo.username}
                        onChangeText={(e)=> {
                            const newUserInfo = {...userInfo};
                            newUserInfo.username = e;
                            setUserInfo(newUserInfo);
                        }}
                    />
                    <View style={login.passwordContainer}>
                        <TextInput 
                            placeholder="Senha"
                            autoCapitalize="none"
                            style={login.textInput}
                            value={userInfo.password}
                            secureTextEntry={hidePassword}
                            onChangeText={(e)=> {
                                const newUserInfo = {...userInfo};
                                newUserInfo.password = e;
                                setUserInfo(newUserInfo);
                            }}
                        />
                        <TouchableOpacity onPress={() =>setHidePassword(!hidePassword)} style={login.toggle}>
                            <Image source={hidePassword ? eyeClosed : eyeOpened } style={login.eyes}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity style={theme.primaryButton} activeOpacity={0.8} onPress={() => handleLogin()}>
                    <View style={login.buttonTextContainer}>
                        <Text style={text.primaryText}>Fazer Login</Text>
                    </View>
                    <View style={theme.arrowContainer}>
                        <Image source={arrow} />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Login;