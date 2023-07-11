import React, {useRef, useEffect } from "react";
import "./ModalInfo.css";

const ModalInfo = (props) => {
  const { onClose, modalContent } = props;
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
      <div className="modal-dialog modal-lg " role="document" ref={modalRef}>
        <div className="modal-content colormodalinfo" >
          <div className="modal-header" >
          <h5 className="modal-title"><i className="bi bi-card-list"> </i>Detalles</h5>
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

          <div className="modal-body" >
            <p className="text-justify">
              {modalContent}
            </p>

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

export default ModalInfo;

