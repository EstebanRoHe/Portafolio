import React from "react";
import "./ModalInfo.css";
import certificacion from "../imagenes/certificacion.png";
const Certificacion = (props) => {

    return (
        <div className="benefit-item card backcolor" >
            <h5 className="modal-title negrita ">Certificación de Scrum.<br /></h5>
            <p className="text-justify">
            
                <img src={certificacion} className="card-img-top" alt="..." />
         
            
            </p>
        </div>
    );
};

export default Certificacion;