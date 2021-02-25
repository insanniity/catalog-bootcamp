import React from 'react';
import { makePrivateRequest } from 'core/utils/request';
import BaseForm from '../../BaseForm';
import './styles.scss';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';

type FormState ={
    name: string;
    price: string;    
    description: string;
    imageUrl:string;
}

const Form = () => {
    const {register, handleSubmit, errors } = useForm<FormState>(); 
    const histoty = useHistory();   

    const onSubmit = (data:FormState) => {        
        makePrivateRequest({url: '/products', method: 'POST', data})
            .then(() => {
                toast.success('Produto cadastrado com sucesso!');
                histoty.push('/admin/products');
            })
            .catch(() =>{
                toast.error('Erro ao salvar produto!');
            });
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <BaseForm title="Cadastrar Produto">
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
                                name="imageUrl" 
                                className="form-control input-base"                             
                                placeholder="Imagem" 
                            />
                            {errors.imageUrl && (
                                <div className="invalid-feedback d-block">
                                    {errors.imageUrl.message}
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