import React from "react";
import "./ModalInfo.css";

const ContenidoJYT = (props) => {

  return (
    <div className="benefit-item card backcolor">
      <h5 className="modal-title negrita "> La aplicación web (SOAP) es un sistema para la optimización de alisto de productos dentro de la bodega de la empresa Jiménez & Tanzi el cual contiene:</h5>
      <p className="text-justify">
      <hr></hr>
        1.	Inicio de sesión.<br />
        2.	Crea, elimina, lista, modifica, asigna roles y filtra usuarios.<br />
        3.	Lista y filtra Ordenes.<br />
        4.	Crea, elimina, lista, modifica y filtra tipo de bodegas.<br />
        5.	Crea, elimina, lista, modifica y filtra tipo de pasillos.<br />
        6.	Crea, elimina, lista, modifica y filtra racks.<br />
        7.	Crea, elimina, lista, modifica y filtra estantes.<br />
        8.	Valida si hay un usurario ya existente al crear o modificar un nuevo usuario.<br />
        9.	Valida si una contraseña es correcta al loguearse, o al crear un usuario nuevo.<br />
        10.	Se asignan roles a los usuarios y se aplican restricciones de acceso a determinadas páginas o funcionalidades basadas en los roles asignados.<br />
        11.	La aplicación está diseñada para adaptarse y funcionar correctamente en diferentes dispositivos(responsive).<br />
        12.	Alertas para proporcionar información y notificar sobre eventos relevantes, errores o acciones realizadas durante las operaciones de creación, modificación o eliminación de datos.<br />
        13.	Orden de Alisto Ordenada descendentemente basada en la ubicación física en los estantes.<br />
        <hr></hr>
        <i className="bi bi-info-circle negrita" style={{ color: "red" }}> Después de completar la entrega del producto,
          todos los derechos de propiedad intelectual del código fuente pasan a ser propiedad exclusiva de
          Jiménez & Tanzi. Esto significa que Jiménez & Tanzi tiene la titularidad y los derechos de autor
          sobre el código y puede utilizarlo, modificarlo y distribuirlo según sea necesario para sus fines
          comerciales o empresariales. </i><br />
          <hr></hr>
        •El objetivo del curso era encontrar una empresa con un departamento de Tecnología de la Información (TI)
        y solicitarles un pequeño proyecto para desarrollarlo de forma gratuita.<br />
        • Formé parte del equipo encargado del desarrollo del backend de la aplicación web llamada SOAP,
        utilizando los lenguajes de programación: PHP, con el Framework: Laravel 8 y utilizando la base de datos MySQL,
        y Oracle Cloud para el despliegue de la aplicación.<br />
        • Utilicé herramientas como GitHub para el control de versiones y colaboración en el desarrollo del proyecto.<br />
        • Trabajé en equipo aplicando metodologías ágiles como Scrum, utilizando Azure DevOps para la configuración
        y gestión de Azure Board para asignar tareas, dar seguimiento al progreso y gestionar el backlog del proyecto.<br />

      </p>
    </div>
  );
};

export default ContenidoJYT;