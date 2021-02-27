import React, { useEffect, useState } from 'react';
import { makePrivateRequest, makeRequest } from 'core/utils/request';
import BaseForm from '../../BaseForm';
import './styles.scss';
import { useForm, Controller } from 'react-hook-form';
import { toast } from 'react-toastify';
import Select from 'react-select';
import { useHistory, useParams } from 'react-router-dom';
import { Category } from 'core/types/product';
import PriceField from './PriceField';
import ImageUpload from '../ImageUpload';

export type FormState ={
    name: string;
    price: string;    
    description: string;
    imgUrl:string;
    categories: Category[];
}

type ParamsType = {
    productId: string;
}

const Form = () => {
    const {register, handleSubmit, errors, setValue, control } = useForm<FormState>(); 
    const histoty = useHistory();
    const { productId } = useParams<ParamsType>(); 
    const [categories, setCategories] = useState<Category[]>([]);
    const [isLoadinCategories, setIsLoadingCategories] = useState(false);
    const isEditing = productId !== 'create';
    const [uploadedImgUrl, setUploadedImgUrl] = useState('');
    const [productImgUrl, setProductImgUrl] = useState('');

    useEffect(() => {       
        if(isEditing){
            makeRequest({url: `/products/${productId}`})
            .then(response => {
                setValue('name', response.data.name);
                setValue('price', response.data.price);
                setValue('description', response.data.description);
                setValue('categories', response.data.categories)
                setProductImgUrl(response.data.imgUrl)
            });
        }        
    }, [productId, isEditing, setValue]);

    useEffect(() => {
        setIsLoadingCategories(true);
        makeRequest({ url: '/categories'})
        .then(response => setCategories(response.data.content))
        .finally(() => setIsLoadingCategories(false));
    },[]);

    const onSubmit = (data:FormState) => {
        data.price = data.price.replace(".","").replace(",", ".");        
        const payload = {
            ...data,
            imgUrl: uploadedImgUrl
        }
        
        makePrivateRequest({url: isEditing ? `/products/${productId}` : '/products', method: isEditing ? 'PUT' : 'POST', data:payload})
            .then(() => {
                toast.success('Produto salvo com sucesso!');
                histoty.push('/admin/products');
            })
            .catch(() =>{
                toast.error('Erro ao salvar produto!');
            });
    }

    const onUploadSuccess = (imgUrl:string) => {
        setUploadedImgUrl(imgUrl);
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <BaseForm title={isEditing ? 'Editando o produto' : 'Cadastrar produto'}>
                <div className="row">
                    <div className="col-6">
                        <div className="form-group mb-5">                        
                            <input 
                                type="text" 
                                ref={register({
                                    required: "Campo obrigatório",
                                    minLength: {
                                        value: 5,
                                        message: 'O campo deve ter no minimo 5 caracteres'
                                    },
                                    maxLength:{
                                        value:60,
                                        message: 'O campo deve ter no maximo 60 caracteres'
                                    }
                                })}
                                name="name" 
                                className="form-control input-base"                             
                                placeholder="Nome do produto" 
                            />
                            {errors.name && (
                                <div className="invalid-feedback d-block">
                                    {errors.name.message}
                                </div>
                            )}
                        </div>
                        <div className="form-group mb-5">
                            <Controller
                                as={Select} 
                                defaultValue=""                                
                                name="categories"
                                rules={{ required:true }}
                                control={control}
                                isLoading={isLoadinCategories}
                                options={categories} 
                                getOptionLabel={(option: Category)=> option.name}
                                getOptionValue={(option: Category)=> String(option.id)}  
                                isMulti 
                                classNamePrefix="categories-select" 
                                placeholder="Categorias" 
                            />
                            {errors.categories && (
                                <div className="invalid-feedback d-block">
                                    Campo obrigatório
                                </div>
                            )}
                        </div>
                        <div className="form-group mb-5">
                            <PriceField control={control}/>
                            {errors.price && (
                                <div className="invalid-feedback d-block">
                                    {errors.price.message}
                                </div>
                            )}
                        </div>
                        <div className="form-group mb-5">
                            <ImageUpload onUploadSuccess={onUploadSuccess} productImageUrl={productImgUrl}/>
                        </div>
                    </div>
                    <div className="col-6">
                        <textarea 
                            ref={register({required: "Campo obrigatório"})} 
                            className="form-control input-base"
                            placeholder="Descrição" 
                            name="description"
                            cols={30}
                            rows={10}                            
                        />
                        {errors.description && (
                            <div className="invalid-feedback d-block">
                                {errors.description.message}
                            </div>
                        )}
                    </div>
                </div>
            </BaseForm>
        </form>
    )
}

export default Form;