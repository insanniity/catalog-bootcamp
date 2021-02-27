import React, { useState } from 'react';
import {ReactComponent as UploadPlaceholder} from 'core/assets/images/upload-placeholder.svg'
import './styles.scss';
import { makePrivateRequest } from 'core/utils/request';
import { toast } from 'react-toastify';

type Props ={
    onUploadSuccess: (imgUrl: string)=>void;
    productImageUrl: string;
}

const ImageUpload = ({ onUploadSuccess, productImageUrl}: Props) => {
    const [uploadProgress, setUploadProgress] = useState(0);
    const [uploadedImgUrl, setUploadedImgUrl] = useState('');
    const imgUrl = uploadedImgUrl || productImageUrl;

    const onUploadProgress = (progressEvent:ProgressEvent) => {
        const progress = Math.round((progressEvent.loaded*100)/progressEvent.total);
        setUploadProgress(progress);
    }

    const uploadImage = (selectedImage:File) => {
        const payload = new FormData();
        payload.append('file', selectedImage);
        makePrivateRequest({ url: '/products/image', method: 'POST', data: payload, onUploadProgress})
            .then(response => {
                setUploadedImgUrl(response.data.uri);
                onUploadSuccess(response.data.uri);
            })
            .catch(() => {toast.error('Erro ao enviar arquivo!')})
            .finally(() => {setUploadProgress(0)});

    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedImage = event.target.files?.[0];
        if(selectedImage){
            uploadImage(selectedImage);
        }
    }


    return (
        <div className="row">
            <div className="col-6">
                <div className="upload-button-container">
                    <input type="file" onChange={handleChange} accept="image/png, image/jpeg" id="upload" hidden/>
                    <label htmlFor="upload">Adicionar Imagem</label>
                </div>
                <small className="help-txt">As imagens devem ser  JPG ou PNG e não devem ultrapassar <b>5 mb.</b></small>
            </div>
            <div className="col-6 upload-placeholder">
                {uploadProgress > 0 && (
                    <>
                        <UploadPlaceholder />
                        <div className="upload-progress-container" >
                            <div className="upload-progress" style={{width:`${uploadProgress}%`}} />
                        </div>
                    </>
                )}
                {imgUrl && uploadProgress === 0 && (
                    <img src={imgUrl} alt={imgUrl} className="uploaded-image"/>
                )}
            </div>
        </div>
    )
}


export default ImageUpload;