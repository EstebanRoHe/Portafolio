import React from "react";
import "./ModalInfo.css";
import ina from '../imagenes/ina.jpeg';

const Ina = (props) => {

    return (
        <div className="benefit-item card backcolor" >
            <h5 className="modal-title negrita ">Diploma Ejecutivo en Ingles para Servicios .<br /></h5>
            <p className="text-justify">
            
                <img src={ina} className="card-img-top" alt="..." />
         
            
            </p>
        </div>
    );
};

export default Ina;