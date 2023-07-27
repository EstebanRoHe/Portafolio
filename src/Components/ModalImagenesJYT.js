import React, {useRef, useEffect } from "react";
import "./ModalInfo.css";
import imagen1 from "../imagenes/Imagen1.png"
import imagen2 from "../imagenes/Imagen2.png"
import jt from '../imagenes/imagenj&t.png';
import admin1 from "../imagenes/admi1.png"
import admin2 from "../imagenes/admin2.png"
import alisto from '../imagenes/alisto.png';

const ModalImagenesJYT = (props) => {
    const { onClose } = props;
    const modalRef = useRef(null);

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
          onClose();
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
  
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [onClose]);
    
    return (
        <div className="modal modal-right" tabIndex="-1" role="dialog" style={{ display: "block" }}>
            <div className="modal-dialog modal-lg" role="document"ref={modalRef}> 
                <div className="modal-content colormodalinfo">
                    <div className="modal-header">
                        <h5 className="modal-title">Imagenes de (SOAP) Sistema de Optimización de Alisto de Productos.</h5>
                        <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                            onClick={onClose}
                        >
                            <i className="bi bi-x-lg"></i>
                        </button>
                    </div>
                   
                        <div className="container">
                            <div className="card backcolor" >
                                <div className="row">
                                    <img src={imagen1} className='jimenez' alt="..." />
                                    <img src={imagen2} className='jimenez' alt="..." />
                                    <img src={jt} className='jimenez' alt="..." />
                                    <img src={admin1} className='jimenez' alt="..." />
                                    <img src={admin2} className='jimenez' alt="..." />
                                    <img src={alisto} className='jimenez' alt="..." />
                                </div>

                            </div>
                        </div>
                   
                    <div className="modal-footer">
                        <button type="button" className="btn btn-warning" data-dismiss="modal" onClick={onClose}>
                            Cerrar
                        </button>

                    </div>
                </div>
                
            </div>
        </div>

    );
};

export default ModalImagenesJYT;