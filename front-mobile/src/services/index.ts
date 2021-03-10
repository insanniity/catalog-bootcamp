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

export async function uploadImage(image:string) {
    if(!image) return;

    const authToken = await userToken();
    let data = new FormData();
    data.append("file",{
        uri: image,
        name:image,
    })

    const res = api.post(`products/image`, data, {
        headers:{
            Authorization: `Bearer ${authToken}`,
            "Content-Type": "multipart/form-data", 
        }
    })

    return res;
}

export async function getProduct(id:number) {
    const res = await api.get(`products/${id}`);
    return res.data;
}

export async function updateProduct(data:object) {
    const aToken = await userToken();
    const res = await api.put(`products/${data.id}`, data, {
        headers:{
            Authorization: `Bearer ${aToken}`,
        }
    })
    return res;
}