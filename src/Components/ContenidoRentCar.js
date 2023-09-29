import React from "react";
import "./ModalInfo.css";

const ContenidoRentCar = (props) => {

  return (
    <div className="benefit-item card backcolor">
      <i className="bi bi-info-circle negrita " style={{ color: "#F0BA2D" }}> Para acceder como administrador, utiliza las siguientes credenciales de inicio de sesión: <br />
        • Usuario: admin <br />
        • Contraseña: admin <br />
        Ten en cuenta que la aplicación está desplegada en un host gratuito que se apaga después de 15 minutos de inactividad. Sin embargo, cuando vuelvas a utilizar la aplicación, se volverá a levantar en unos minutos.
      </i>
      <h5 className="modal-title negrita">La aplicación web (Rent a Car) es para un servicio de alquiler de autos el cual contiene: </h5>
      <p className="text-justify">
        <hr></hr>
        1.	Inicio de sesión.<br />
        2.	Crea, elimina, lista, modifica, asigna roles y filtra usuarios.<br />
        3.	Crea, elimina, lista, modifica y filtra tipo de vehículos.<br />
        4.	Crea, elimina, lista, modifica y filtra vehículos.<br />
        5.	Crea, elimina, lista, modifica y filtra alquileres de vehículos.<br />
        6.	Crea, lista, y filtra logs.<br />
        7.	Valida si hay un usurario ya existente al crear o modificar un nuevo usuario.<br />
        8.	Valida si hay un email ya existente al crear o modificar un nuevo usuario.<br />
        9.	Valida si una contraseña es correcta al cambiar la contraseña, loguearse, o al crear un usuario nuevo.<br />
        10.	Valida vehículos disponibles a la hora de reservar por días un alquiler.<br />
        11.	Calcula el precio en función del costo del alquiler del automóvil y la duración en días del alquiler.<br />
        12.	Envió de correo electrónico para información o contacto.<br />
        13.	Se asignan roles a los usuarios y se aplican restricciones de acceso a determinadas páginas
        o funcionalidades basadas en los roles asignados.<br />
        14.	La aplicación está diseñada para adaptarse y funcionar correctamente en diferentes dispositivos(responsive).<br />
        15.	Manejo de archivos mediante la integración de cloudinary, un servicio de almacenamiento en la nube
        para administrar archivos multimedia en este caso las imágenes de los vehículos.<br />
        16.	Alertas para proporcionar información y notificar sobre eventos relevantes, errores o acciones realizadas durante
        las operaciones de creación, modificación o eliminación de datos.<br />
        17.	La implementación de un indicador de carga (loading) al realizar consultas o acciones que involucran comunicación
        con el servidor.<br />
        <hr></hr>
        • La aplicación web está construida utilizando los lenguajes de programación Java y JavaScript, junto con varios
        frameworks y bibliotecas.
        <br />
        • En el lado del front end, se utilizó JavaScript con el framework React.js, junto con bibliotecas
        como Axios, React Router, Bootstrap, React Bootstrap,
        Bootstrap Icons y SweetAlert2. La aplicación del front end está desplegada en Vercel.
        <br />
        • En el lado del back end, se utilizó Java con el framework Spring Boot haciendo uso de tecnologías
        como Lombok y Hibernate, junto con JPA, Spring Security para la implementación de la seguridad y JWT (JSON Web Tokens), 
        JavaMailSender para el envío de correos electrónicos, y Cloudinary y MultipartFile para el manejo de archivos.
        Además, se implementó Docker para facilitar la gestión y despliegue de la aplicación en la plataforma Render.
        <br />
        • Para almacenar los datos, se utilizó una base de datos MySQL, la cual está desplegada en Railway.
        <br />
        <a href="https://github.com/EstebanRoHe/Front_End_Reant_a_Car_in_React.git" className="btn btn-success  rosa"><i className="bi bi-github"> </i>Ir al GitHub Front End </a>
        <br />
        <a href="https://github.com/EstebanRoHe/Back_End_Rent_a_Car_in_Spring_Boot.git" className="btn btn-success  rosa"><i className="bi bi-github"> </i>Ir al GitHub Back End </a>
      </p>
     
    </div>
  );
};

export default ContenidoRentCar;