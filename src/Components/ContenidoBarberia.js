import React from "react";
import "./ModalInfo.css";

const ContenidoBarberia = (props) => {

  return (
    <div className="benefit-item card backcolor">
      <i className="bi bi-info-circle negrita " style={{color:"#F0BA2D"}}> Para acceder como administrador, utiliza las siguientes credenciales de inicio de sesión: <br />
        • Usuario: admin <br />
        • Contraseña: admin <br />
        Ten en cuenta que la aplicación está desplegada en un host gratuito que se apaga después de 15 minutos de inactividad. Sin embargo, cuando vuelvas a utilizar la aplicación, se volverá a levantar en unos minutos.
        </i>
      <h5 className="modal-title negrita">La aplicación web (Barberia y Bloc) contiene: </h5>
      <p className="text-justify">
      <hr></hr>
        1.	Inicio de sesión.<br />
        2.	Crea, elimina, lista, modifica, asigna roles y filtra usuarios.<br />
        3.	Crea, elimina, lista, modifica Posts en el Bloc.<br />
        4.	Valida si hay un usurario ya existente al crear o modificar un nuevo usuario.<br />
        5.	Valida si hay un email ya existente al crear o modificar un nuevo usuario.<br />
        6.	Se asignan roles a los usuarios y se aplican restricciones de acceso a determinadas páginas 
        o funcionalidades basadas en los roles asignados.<br />
        7.	La aplicación está diseñada para adaptarse y funcionar correctamente en diferentes dispositivos(responsive).<br />
        8.	Alertas para proporcionar información y notificar sobre eventos relevantes, errores o acciones realizadas durante 
        las operaciones de creación, modificación o eliminación de datos.<br />
        9.	La implementación de un indicador de carga (loading) al realizar consultas o acciones que involucran comunicación
         con el servidor.<br />
         <hr></hr>
        • La aplicación web está construida utilizando los lenguajes de programación Python y JavaScript, junto con varios
         frameworks y bibliotecas.
        <br />
        • En el lado del front end, se utilizó JavaScript con el framework React.js, junto con bibliotecas
         como Axios, React Router, Bootstrap, React Bootstrap,
         Bootstrap Icons y SweetAlert2. La aplicación del front end está desplegada en Vercel.
        <br />
        • En el lado del back end, se utilizó Python con el framework Django Rest Framework, djangorestframework-simplejwt para la 
        implementación de JWT (JSON Web Tokens), y la plataforma está desplegada en Render.
        <br />
        • Para almacenar los datos, se utilizó una base de datos MySQL, la cual está desplegada en Railway.
        <br />
        
      </p>
    </div>
  );
};

export default ContenidoBarberia;