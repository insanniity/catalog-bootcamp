import axios from 'axios';
import AsyncStorage from "@react-native-async-storage/async-storage";

export const api = axios.create({
    baseURL: "https://insannity-catalog.herokuapp.com/",
})


export const TOKEN =  "Basic Y2F0YWxvZzpjYXRhbG9nMTIz";

export function getProducts() {
    const res = api.get(`products`);
    return res;
}

export function getCategories(){
    const res = api.get(`categories`);
    return res;
}

export async function createProduct(data: object){
    const authToken = await userToken();
    const res = api.post(`products`, data, {
        headers:{
            Authorization: `Bearer ${authToken}`,
        }
    })
    return res;
}

export async function userToken(){
    const token = await AsyncStorage.getItem("@token");
    return token;
}

export async function deleteProduct(id:number) {
    const atoken = await userToken();
    const res = api.delete(`products/${id}`,{headers:{ Authorization : `Bearer ${atoken}`,}});
}