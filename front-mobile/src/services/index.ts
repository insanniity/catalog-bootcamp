import axios from 'axios';


export const api = axios.create({
    baseURL: "https://insannity-catalog.herokuapp.com/",
})


export const TOKEN =  "Basic Y2F0YWxvZzpjYXRhbG9nMTIz";