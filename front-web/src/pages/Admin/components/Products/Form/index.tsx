import React, { useEffect } from 'react';
import { makePrivateRequest, makeRequest } from 'core/utils/request';
import BaseForm from '../../BaseForm';
import './styles.scss';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useHistory, useParams } from 'react-router-dom';

type FormState ={
    name: string;
    price: string;    
    description: string;
    imgUrl:string;
}

type ParamsType = {
    productId: string;
}

const Form = () => {
    const {register, handleSubmit, errors, setValue } = useForm<FormState>(); 
    const histoty = useHistory();
    const { productId } = useParams<ParamsType>();  
    const isEditing = productId !== 'create';

    useEffect(() => {       
        if(isEditing){
            makeRequest({url: `/products/${productId}`})
            .then(response => {
                setValue('name', response.data.name);
                setValue('price', response.data.price);
                setValue('description', response.data.description);
                setValue('imgUrl', response.data.imgUrl);
            });
        }
        
    }, [productId, isEditing, setValue]);

    const onSubmit = (data:FormState) => {        
        makePrivateRequest({url: isEditing ? `/products/${productId}` : '/products', method: isEditing ? 'PUT' : 'POST', data})
            .then(() => {
                toast.success('Produto salvo com sucesso!');
                histoty.push('/admin/products');
            })
            .catch(() =>{
                toast.error('Erro ao salvar produto!');
            });
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
                            <input 
                                type="number"                                  
                                name="price" 
                                className="form-control input-base"                           
                                placeholder="Valor do produto" 
                                ref={register({
                                    required: "Campo obrigatório",                                   
                                })}
                        />
                            {errors.price && (
                                <div className="invalid-feedback d-block">
                                    {errors.price.message}
                                </div>
                            )}
                        </div>
                        <div className="form-group mb-5">
                            <input 
                                type="text" 
                                ref={register({required: "Campo obrigatório"})}
                                name="imgUrl" 
                                className="form-control input-base"                             
                                placeholder="Imagem" 
                            />
                            {errors.imgUrl && (
                                <div className="invalid-feedback d-block">
                                    {errors.imgUrl.message}
                                </div>
                            )}
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