import React from 'react';
import { useHistory } from 'react-router-dom';
import './styles.scss';

type Props = {
    title: string;
    children: React.ReactNode;
}

const BaseForm = ({title, children} : Props) => {
    const history = useHistory();
    const handleCancel = () =>{
        history.push('../');
    }
    return(
        <div className="admin-base-form card-base ">
            <h1 className="base-form-title">{title}</h1>
            <div className="admin-base-form-content mt-5">
                {children}
            </div>           
            <div className="base-form-actions">
                <button className="btn btn-primary border-radius-10 mr-3 px-5">CADASTRAR</button>
                <button className="btn btn-outline-danger border-radius-10 mr-3 px-5" onClick={handleCancel}>CANCELAR</button>
            </div>
        </div>
    )
}

export default BaseForm;