import { makeRequest } from 'core/utils/request';
import React, { useState } from 'react';
import BaseForm from '../../BaseForm';
import './styles.scss';

type FormState ={
    name: string;
    price: string;
    category: string;
    description: string;
}

type FormEvent = React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>;

const Form = () => {
    const [formData, setFormData] = useState<FormState>({name: '', price: '', category: '', description: ''});    

    const handleOnChange = (event: FormEvent) => {
        const name = event.target.name;
        const value = event.target.value;

        setFormData(data => ({...data, [name]: value}));
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();        
        const payload = {
            ...formData,
            imgUrl: 'https://compass-ssl.xbox.com/assets/83/53/83534a33-0998-43dc-915a-4ec0a686d679.jpg',
            categories: [{id: formData.category }]
        }
        makeRequest({url: '/products', method: 'POST', data: payload});
    }

    return(
        <form onSubmit={handleSubmit}>
            <BaseForm title="Cadastrar Produto">
                <div className="row">
                    <div className="col-6">
                        <input 
                            type="text" 
                            value={formData.name} 
                            name="name" 
                            className="form-control mb-5" 
                            onChange={handleOnChange} 
                            placeholder="Nome do produto" 
                        />

                        <select 
                            value={formData.category} 
                            className="form-control mb-5" 
                            onChange={handleOnChange}
                            name="category"
                        >
                                <option value="1">Livros</option>
                                <option value="3">Computador</option>
                                <option value="2">Eletronicos</option>
                        </select>

                        <input 
                            type="text" 
                            value={formData.price}  
                            name="price" 
                            className="form-control mb-5"
                            onChange={handleOnChange}
                            placeholder="Valor do produto" 
                        />
                    </div>
                    <div className="col-6">
                        <textarea 
                            value={formData.description} 
                            className="form-control" 
                            name="description"
                            cols={30}
                            rows={10}
                            onChange={handleOnChange}
                        />
                    </div>
                </div>
            </BaseForm>
        </form>
    )
}

export default Form;