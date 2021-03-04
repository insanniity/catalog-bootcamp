import {api, TOKEN } from "./index";
import queryString from 'query-string';
import AsyncStorate from '@react-native-async-storage/async-storage';

interface AuthProps{
    username:string;
    password:string;
}

export async function authLogin (userInfo:AuthProps){
    const data = queryString.stringify({...userInfo, grant_type: "password"});
    const result = await api.post('oauth/token', data, {
        headers:{
            Authorization: TOKEN,
            "Content-Type": "application/x-www-form-urlencoded",
        },       
    });

    const {access_token} = result.data;
    setAsyncKeys("@token", access_token);
    
    return result;
    
}


async function setAsyncKeys(key:string, value:string){
    try{
        await AsyncStorate.setItem(key, value);
    }catch(e){
        console.log(e);
    }
}

export async function isAuthenticated(){
    try{
        const token = await AsyncStorate.getItem("@token");
       
        return token ? true : false;

    }catch(e){console.log(e)}
}


export async function doLogout(){
    try{
        AsyncStorate.removeItem("@token");
    }catch(e){
        console.log(e);
    }
}