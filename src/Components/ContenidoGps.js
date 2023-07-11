import React from "react";
import "./ModalInfo.css";

const ContenidoGps = (props) => {

    return (
        <div className="benefit-item card backcolor" >
            <h5 className="modal-title negrita ">La aplicación móvil (GPS) es una aplicación que permita obtener la ubicación actual cada 10 segundos el cual contiene.<br /></h5>
            <p className="text-justify">
                <hr></hr>
                1. La aplicación cuenta con un menú con las siguientes opciones:  Ubicación Actual, Acerca de...,
                Configuración, Polígono, y Phone.<br />
                2.<br />
                 • Al hacer clic sobre la opción Ubicación Actual en el menú, Muestra todas las ubicaciones registradas
                   mediante marcadores en el mapa de Google, además el detalle de los marcadores se configura desde el fragmento
                   “Configuración”, la aplicación también obtiene la ubicación (localización) en tiempo real cada 10 segundos la
                   cual se almacenar en una base de datos (Room).<br />
                 • Además, contiene un área restringida la cual visualmente corresponde a un área tipo polígono, en caso de que
                   la ubicación actual esté ubicada dentro del polígono los marcadores ubicados en el área restringida son visualmente
                   distintos.<br />
                 • También, se realizar una llamada telefónica al número registrado cada vez que la ubicación actual se encuentre dentro
                   del área del polígono.<br />
                 • Igualmente, el fragmento de Ubicación Actual cuenta con un filtro de fecha, una vez digite una fecha y le dé en
                   el botón de buscar se muestran en el mapa únicamente los puntos registrados en la fecha seleccionan.<br />
                3. Al hacer clic sobre la opción Configuración en el menú, permite configurar el texto de los marcadores en el
                   mapa, una vez configurado el texto todos los marcadores en el mapa obtienen el texto configurado desde este fragmento.<br />
                4. Al hacer clic sobre la opción Acerca de... en el menú, muestra un diálogo, además contiene un botón que cierra
                   la aplicación.<br />
                5.<br />
                 • Al hacer clic sobre la opción de Polígono en el menú, Se tiene la funcionalidad para registrar y almacenar los
                   puntos del Área Restringida (id, latitud, longitud).<br />
                 • Se tiene la funcionalidad de lista todos los puntos del polígono.<br />
                 • Se tiene la funcionalidad de eliminar cada punto del polígono por medio del id<br />
                6. Al hacer clic sobre la opción de Phone en el menú, Se tiene la funcionalidad de registrar
                 un número de teléfono de emergencia, el cual cada vez que la ubicación actual se encuentre 
                 dentro del área del polígono se hace una llamada al teléfono registrado.<br />

                <hr></hr>
                • La aplicación móvil está desarrollada utilizando el lenguaje de programación Kotlin, utilizando la implementación de Google MAP 
                para la gestión de la información de la obtención de la ubicación en tiempo real, la visualización de mapas interactivos, la marcación
                de puntos de interés y la configuración de áreas restringidas (polígonos). <br />
            </p>
        </div>
    );
};

export default ContenidoGps;