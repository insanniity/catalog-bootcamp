import ButtonIcon from 'core/components/ButtonIcon';
import React from 'react';
import { Link } from 'react-router-dom';
import AuthCard from '../Card';
import './styles.scss';
import { useForm } from "react-hook-form";

type FormData ={
    email:string;
    password:string;
}

const Login = () => {
    const { register, handleSubmit } = useForm<FormData>();
    const onSubmit = (data:FormData) =>{
        console.log(data);
    }

    return (
        <AuthCard title="Login">
            <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                <input type="email" required className="form-control input-base margin-botton-30" placeholder="Email" name="email" ref={register} value="maria@gmail.com"/>
                <input type="password" required className="form-control input-base" placeholder="Senha" name="password" ref={register} value="123456"/>
                <Link to="/admin/auth/recover" className="login-link-recover">Esqueci a senha!</Link>
                <div className="button-login-form">
                    <ButtonIcon text="Logar"/>  
                </div>
                <div className="text-center">
                    <span className="not-registered">
                        Não tem Cadastro? <Link to="/admin/auth/register" className="login-link-register">CADASTRAR</Link>
                    </span>
                </div>
            </form>            
        </AuthCard>
    )
}

export default Login;