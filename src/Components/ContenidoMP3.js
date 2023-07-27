import React from "react";
import "./ModalInfo.css";

const ContenidoMP3 = (props) => {

  return (
    <div className="benefit-item card backcolor" >
      <h5 className="modal-title negrita ">   La aplicación móvil (Reproductor MP3) es una aplicación que permita buscar canciones utilizando la API de Spotify :<br /></h5>
      <p className="text-justify">
        <hr></hr>
        1.	Buscador de canciones utilizando la API de Spotify.<br />
        2.	Menú en cada elemento de la lista con las siguientes opciones: ver álbum, ver artista, artistas relacionados, ver reproductor.<br />
        3.	Menú en cada elemento de la lista con las siguientes opciones: ver álbum, ver artista, artistas relacionados, ver reproductor.<br />
        4.	Al hacer clic sobre ver álbum cargará la información del álbum en detalle, de acuerdo con lo siguiente: Imagen del álbum, nombre
        del álbum, el nombre del artista, lista de canciones de ese álbum.<br />
        5.	Al hacer clic sobre ver artista se cargará la información del artista en detalle de acuerdo con lo siguiente: la imagen del
        álbum, nombre de la canción y la lista de canciones top con su popularidad.<br />
        6.	Mediante Room hace una base de datos el cual guarda la fecha y la búsqueda cada vez que se realice una búsqueda de una canción.<br />
        7.	Cada vez que se da clic sobre una canción se reproduce el demo de 30 seg de la canción.<br />
        8.	Mientras se está reproduciendo el demo y si se da clic nuevamente se detendrá la reproducción.<br />
        9.	Completa la búsqueda con búsquedas recientes cuando se halla tipeado al menos 5 letras.<br />
        10.	Al hacer clic sobre ver artistas relacionados, lista el nombre y la popularidad del artista.<br />
        11.	Al hacer clic sobre ver reproductor muestra la imagen del álbum y una interfaz de reproducir, el cual pausa, adelanta y retrocede
        el demo.<br />
        <hr></hr>
        • La aplicación móvil está desarrollada utilizando el lenguaje de programación Kotlin y está conectada a la API de Spotify
        for Developers para realizar consultas y obtener información sobre canciones, álbumes, artistas y datos relacionados.
        Esto permite que la aplicación pueda realizar búsquedas de canciones, obtener detalles de álbumes y artistas, reproducir
        demos de canciones, y acceder a información adicional como artistas relacionados y popularidad de canciones y artistas…<br />
        • La aplicación se encuentra desplegada en la tienda de aplicaciones de Amazon (Amazon App) para su descarga y uso.<br />
        <a href="https://drive.google.com/file/d/1Rmz4__TbGIX2s5MWT3rekv8mP2a3VfJk/view?usp=drive_link" className="btn btn-warning descargar-color"><i className="bi bi-download"> </i>Descargar apk de la app</a>
        <br />
        <a href="https://github.com/EstebanRoHe/Reproductor_de_Musica.git" className="btn btn-success rosa"><i className="bi bi-github"> </i>Ir al GitHub del codigo</a>
      </p>
    </div>
  );
};

export default ContenidoMP3;