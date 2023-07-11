import React from "react";
import "./ModalInfo.css";
import una from '../imagenes/una.jpeg';

const Una = (props) => {

    return (
        <div className="benefit-item card backcolor" >
            <h5 className="modal-title negrita ">Diploma en Programación de Aplicaciones informáticas .<br /></h5>
            <p className="text-justify">
            
                <img src={una} className="card-img-top" alt="..." />
         
            
            </p>
        </div>
    );
};

export default Una;