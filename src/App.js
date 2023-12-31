import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css'
import rentcar from './imagenes/rentacar.png';
import booststrap from './imagenes/booststrap.png';
import Reproductor from './imagenes/Reproductor.png';
import jt from './imagenes/j&t.png';
import java from './imagenes/java.png';
import js from './imagenes/js.png';
import react from './imagenes/react.png';
import spring from './imagenes/spring.png';
import spring_security from './imagenes/spring_security.png';
import jwt from './imagenes/jwt.png';
import mysql from './imagenes/mysql.png';
import sweetalert2 from './imagenes/SweetAlert2.png';
import docker from './imagenes/Docker.png';
import cloudinary from './imagenes/cloudinary.png';
import render from './imagenes/render.png';
import netlify from './imagenes/Netlify.png';
import railway from './imagenes/railway.png';
import github from './imagenes/GitHub.png';
import php from './imagenes/php.png';
import laravel from './imagenes/laravel.png';
import oracle from './imagenes/oracle.webp';
import kotlin from './imagenes/kotlin.png';
import androidStudio from './imagenes/androidStudio.png';
import spotify_api from './imagenes/spotify_api.png';
import amazon from './imagenes/amazon.png';
import gps from './imagenes/googleGps.png';
import ubicacione from './imagenes/gps.png';
import postman from './imagenes/postman.png';
import cc from './imagenes/C++.png';
import node from './imagenes/node.png';
import firebase from './imagenes/Firebase.png';
import office from './imagenes/office.png';
import linux from './imagenes/linux.png';
import azure from './imagenes/Azure.png';
import perfil from './imagenes/perfil.jpg';
import python from './imagenes/python.png';
import django from './imagenes/django.png';
import vercel from './imagenes/vercel.png';
import barberia from './imagenes/barberia.png';

import Swal from "sweetalert2";
import 'bootstrap-icons/font/bootstrap-icons.css';
import ModalInfo from './Components/ModalInfo';
import ContenidoRentCar from './Components/ContenidoRentCar';
import ContenidoMP3 from './Components/ContenidoMP3';
import ContenidoJYT from './Components/ContenidoJYT';
import ContenidoBarberia from './Components/ContenidoBarberia';
import ModalImagenesJYT from "./Components/ModalImagenesJYT";
import ContenidoGps from './Components/ContenidoGps';
import Certificacion from './Components/Certificacion';
import Ina from './Components/Ina';
import Una from './Components/Una';
import Footer from './Components/Footer';
import "./Components/ModalInfo.css";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showModalImagenes, setShowModalImagenes] = useState(false);
  const [modalContent, setModalContent] = useState('');


  const showModalHandler = (content) => {
    setShowModal(true);
    setModalContent(content);
  };


  const closeModalHandler = () => {
    setShowModal(false);
  };

  const showModalHandlerImagenes = () => {
    setShowModalImagenes(true);
  };


  const closeModalHandlerImagenes = () => {
    setShowModalImagenes(false);
  };

  const modalSwal = () => {
    Swal.fire({
      icon: 'info',
      html:
        ' Para acceder como administrador : <br />' +
        ' • Usuario: admin <br />' +
        '• Contraseña: admin <br />' +
        ' Ten en cuenta que la aplicación está desplegada en un host gratuito que se apaga después de 15 minutos de inactividad. Sin embargo, cuando vuelvas a utilizar la aplicación, se volverá a levantar en unos minutos.' +
        '</i><br /> ' +
        '<a href="https://reant.vercel.app/">Clic aquí para ir a la página de a Reat a Car</a> ',
      showCloseButton: true,
      focusConfirm: false,
      confirmButtonText:
        'Cancelar',

    })

  };

  const modalSwalbloc = () => {
    Swal.fire({
      icon: 'info',
      html:
        ' Para acceder como administrador : <br />' +
        ' • Usuario: admin <br />' +
        '• Contraseña: admin <br />' +
        ' Ten en cuenta que la aplicación está desplegada en un host gratuito que se apaga después de 15 minutos de inactividad. Sin embargo, cuando vuelvas a utilizar la aplicación, se volverá a levantar en unos minutos.' +
        '</i><br /> ' +
        '<a href="https://barberia-gamma.vercel.app/">Clic aquí para ir a la página de la Barbería y bloc</a> ',
      showCloseButton: true,
      focusConfirm: false,
      confirmButtonText:
        'Cancelar',

    })

  };


  return (
    <><div className='principal'>
      <nav className="navbar navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <h4 className={"title-animacion"}>Esteban Rojas Herrera<span className='maquinaDeEscribir'>&#160;</span></h4>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
            <span > <i className="bi bi-person-badge"></i> Perfil </span>
          </button>
          <div className="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Esteban Rojas Herrera</h5>

              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <img src={perfil} className='imgperfil' alt='...' />
              <hr></hr>
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link " aria-current="page" href="#esteban">• Esteban </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " aria-current="page" href="#about">• Sobre mi</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " aria-current="page" href="#portafolio">• Portafolio</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " aria-current="page" href="#educacion">• Formación Académica</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " aria-current="page" href="#idiomas">• Idiomas</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " aria-current="page" href="#habilidades">• Habilidades Técnicas</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " aria-current="page" href="#contacto">• Contacto</a>
                </li>


              </ul>
              <hr></hr>
            </div>
          </div>
        </div>
      </nav>

      <div className='cvv'>
        <div className=' container' id='esteban'>
          <div className='first' >
            <h1>Esteban Rojas Herrera</h1>
            <h5>Bienenid@ a mi portafolio web.</h5>
            <p>Si deseas contactarme, puedes hacerlo a través de mi dirección de correo electrónico <i className="bi bi-envelope-at negrita"> esteban_rojashe@hotmail.com</i></p>
          </div>

          <div className='about' id='about'>
            <h1>Sobre mi</h1>
            <p>
              Soy Estudiante avanzado de Ingeniería en Sistemas en la Universidad Nacional de Costa Rica con habilidad para <br></br>
              adaptarme a nuevos retos en el desarrollo de software. Siempre busco aprender sobre las últimas tendencias y <br></br>
              desafíos en el campo de la informática.
            </p>

            <p>Si deseas contactarme, puedes hacerlo a través de mi dirección de correo electrónico <i className="bi bi-envelope-at negrita"> esteban_rojashe@hotmail.com</i></p>
          </div>
        </div>

        <div className='portafolio' id='portafolio'>

          <div className="container">
            <h1>Portafolio</h1>
            <div className="container ">
              <div className="row ">


                <div className="card card-portafolio" >
                  <div className="card-giratoria">
                    <div className='face front'>
                      <img src={rentcar} className="card-img-top" alt="..." />
                      <h3>Rent a Car</h3>
                    </div>
                    <div className='face back'>
                      <p className="text-justify">
                        <img src={java}
                          className='imagen'
                          alt="..." />

                        <img src={js}
                          className='imagen'
                          alt="..." />

                        <img src={"https://upload.wikimedia.org/wikipedia/commons/1/10/CSS3_and_HTML5_logos_and_wordmarks.svg"}
                          className='imagen'
                          alt="..." />

                        <img src={react}
                          className='imagen'
                          alt="..." />

                        <img src={spring}
                          className='imagen'
                          alt="..." />

                        <img src={spring_security}
                          className='imagen'
                          alt="..." />

                        <img src={jwt}
                          className='imagen'
                          alt="..." />

                        <img src={mysql}
                          className='imagen'
                          alt="..." />

                        <img src={booststrap}
                          className='imagen'
                          alt="..." />

                        <img src={sweetalert2}
                          className='imagen'
                          alt="..." />

                        <img src={docker}
                          className='imagen'
                          alt="..." />

                        <img src={cloudinary}
                          className='imagen'
                          alt="..." />

                        <img src={render}
                          className='imagen'
                          alt="..." />

                        <img src={vercel}
                          className='imagen'
                          alt="..." />

                        <img src={railway}
                          className='imagen'
                          alt="..." />

                        <img src={postman}
                          className='imagen'
                          alt="..." />

                        <img src={github}
                          className='imagen'
                          alt="..." />

                      </p>

                    </div>
                  </div>

                  <div className='card-app'>
                    <Link className="btn btn-success" onClick={modalSwal}><i className="bi bi-browser-chrome"> </i>Ir a la pagina Reat a Car</Link>
                    <button className="btn btn-info info-color"
                      onClick={() => showModalHandler(<ContenidoRentCar />)}><i className="bi bi-info-circle"> </i>Ver detalles</button>
                  </div>

                </div>

                <div className="card card-portafolio" >
                  <div className="card-giratoria">
                    <div className='face front'>
                      <img src={barberia} className="card-img-top" alt="..." />
                      <h3>Barbería y Bloc</h3>
                    </div>
                    <div className='face back'>
                      <p className="text-justify">

                        <img src={python}
                          className='imagen'
                          alt="..." />

                        <img src={js}
                          className='imagen'
                          alt="..." />

                        <img src={"https://upload.wikimedia.org/wikipedia/commons/1/10/CSS3_and_HTML5_logos_and_wordmarks.svg"}
                          className='imagen'
                          alt="..." />

                        <img src={django}
                          className='imagen'
                          alt="..." />

                        <img src={react}
                          className='imagen'
                          alt="..." />

                        <img src={jwt}
                          className='imagen'
                          alt="..." />

                        <img src={mysql}
                          className='imagen'
                          alt="..." />

                        <img src={booststrap}
                          className='imagen'
                          alt="..." />

                        <img src={sweetalert2}
                          className='imagen'
                          alt="..." />


                        <img src={vercel}
                          className='imagen'
                          alt="..." />

                        <img src={render}
                          className='imagen'
                          alt="..." />

                        <img src={railway}
                          className='imagen'
                          alt="..." />

                        <img src={postman}
                          className='imagen'
                          alt="..." />

                        <img src={github}
                          className='imagen'
                          alt="..." />

                      </p>

                    </div>
                  </div>
                  <div className='card-app'>
                    <Link className="btn btn-success" onClick={modalSwalbloc}><i className="bi bi-browser-chrome"> </i>Ir a la Barbería y bloc</Link>

                    <button className="btn btn-info info-color" onClick={() => showModalHandler(<ContenidoBarberia />)}><i className="bi bi-info-circle"> </i>Ver detalles</button>
                  </div>
                </div>

                <div className="card card-portafolio" >
                  <div className="card-giratoria">
                    <div className='face front'>
                      <img src={jt} className="card-img-top" alt="..." />
                      <h3 style={{}}>App para la Empresa Jiménez & Tanzi</h3>
                    </div>
                    <div className='face back'>
                      <p className="text-justify">

                        <img src={php}
                          className='imagen'
                          alt="..." />

                        <img src={laravel}
                          className='imagen'
                          alt="..." />

                        <img src={mysql}
                          className='imagen'
                          alt="..." />

                        <img src={oracle}
                          className='imagen'
                          alt="..." />

                        <img src={postman}
                          className='imagen'
                          alt="..." />

                        <img src={github}
                          className='imagen'
                          alt="..." />

                      </p>

                    </div>
                  </div>
                  <div className='card-app'>
                    <button type="button" className="btn btn-success btnred" onClick={showModalHandlerImagenes}><i className="bi bi-images"> </i>Ver Imágenes de la app </button>
                    <button className="btn btn-info info-color" onClick={() => showModalHandler(<ContenidoJYT />)}><i className="bi bi-info-circle"> </i>Ver detalles</button>


                  </div>
                </div>

                <div className="card card-portafolio" >
                  <div className="card-giratoria">
                    <div className='face front'>
                      <img src={Reproductor} className="card-img-top" alt="..." />
                      <h3>Reproductor MP3</h3>
                    </div>
                    <div className='face back'>
                      <p className="text-justify">

                        <img src={kotlin}
                          className='imagen'
                          alt="..." />

                        <img src={androidStudio}
                          className='imagen'
                          alt="..." />

                        <img src={spotify_api}
                          className='imagen'
                          alt="..." />

                        <img src={amazon}
                          className='imagen'
                          alt="..." />

                        <img src={github}
                          className='imagen'
                          alt="..." />

                      </p>

                    </div>
                  </div>
                  <div className='card-app'>
                    <a href="https://www.amazon.com/gp/product/B0CBDG26RM" className="btn btn-success "><i className="bi bi-download"> </i>Descargar en Amazon Appstore</a>

                    <button className="btn btn-info info-color" onClick={() => showModalHandler(<ContenidoMP3 />)}><i className="bi bi-info-circle"> </i>Ver detalles</button>
                  </div>
                </div>

                <div className="card card-portafolio" >
                  <div className="card-giratoria">
                    <div className='face front'>
                      <img src={ubicacione} className="card-img-top" alt="..." />
                      <h3>GPS</h3>
                    </div>
                    <div className=' face back'>
                      <p className="text-justify">
                        <img src={kotlin}
                          className='imagen'
                          alt="..." />

                        <img src={androidStudio}
                          className='imagen'
                          alt="..." />

                        <img src={gps}
                          className='imagen'
                          alt="..." />

                        <img src={github}
                          className='imagen'
                          alt="..." />

                      </p>

                    </div>
                  </div>
                  <div className='card-app'>
                    <a href="https://drive.google.com/file/d/1MDVzHeuOI5nikUBlyhMLFcrMnB9hNlPr/view?usp=drive_link" className="btn btn-warning descargar-color"><i className="bi bi-download"> </i>Descargar apk de la app</a>

                    <button className="btn btn-info info-color" onClick={() => showModalHandler(<ContenidoGps />)}><i className="bi bi-info-circle"> </i>Ver detalles</button>
                  </div>
                </div>







              </div>

              <p><br />
                Otros proyecto en diferentes tecnologías sin desplegar a producción <a href="https://github.com/EstebanRoHe?tab=repositories" className="btn btn-success rosa"><i className="bi bi-github"> </i>Repositorio de GitHub</a>
              </p>
              <p> Si deseas contactarme, puedes hacerlo a través de mi dirección de correo electrónico <i className="bi bi-envelope-at negrita"> esteban_rojashe@hotmail.com</i></p>
            </div>
          </div>
        </div>

        <div className='educacion' id='educacion'>
          <div className=' container'>
            <h1>Formación Académica</h1>
            <div>

              <p>
                •	Bachillerato en Ingeniería en Sistemas | Universidad Nacional de Costa Rica <i className='negrita'>(Actualmente)</i><br />
                •	Diplomado en Programación de Aplicaciones informáticas | Universidad Nacional de Costa Rica <i className='negrita'>(Feb 2020 - Jul 2022) </i><Link onClick={() => showModalHandler(<Una />)}>Ver certificación</Link><br />
                •	Ejecutivo en Ingles para Servicios | Instituto Nacional de Aprendizaje <i className='negrita'>(Ene 2017 - Abr 2018) </i><Link onClick={() => showModalHandler(<Ina />)}>Ver certificación</Link><br />
                •	Scrum Foundation Professional Certificate SFPC <Link onClick={() => showModalHandler(<Certificacion />)}>Ver certificación</Link>
                <br /><br />
                Si deseas contactarme, puedes hacerlo a través de mi dirección de correo electrónico <i className="bi bi-envelope-at negrita"> esteban_rojashe@hotmail.com</i></p>
            </div>
          </div>
        </div>

        <div className='idiomas' id='idiomas'>
          <div className=' container'>
            <h1>Idiomas</h1>
            <div>
              <p>•	Inglés (intermedio | B2)<br />
                •	Español (nativo)
                <br /><br />
                Si deseas contactarme, puedes hacerlo a través de mi dirección de correo electrónico <i className="bi bi-envelope-at negrita"> esteban_rojashe@hotmail.com</i></p>
            </div>
          </div>
        </div>


        <div className='habilidades' id='habilidades'>
          <div className='container'>
            <h1>Habilidades Técnicas </h1>
            <div className='skill' >

              <img src={java}
                className='imagen'
                alt="..." />

              <img src={js}
                className='imagen'
                alt="..." />

              <img src={kotlin}
                className='imagen'
                alt="..." />

              <img src={python}
                className='imagen'
                alt="..." />

              <img src={php}
                className='imagen'
                alt="..." />

              <img src={cc}
                className='imagen'
                alt="..." />

              <img src={"https://upload.wikimedia.org/wikipedia/commons/1/10/CSS3_and_HTML5_logos_and_wordmarks.svg"}
                className='imagen'
                alt="..." />

              <img src={node}
                className='imagen'
                alt="..." />

              <img src={react}
                className='imagen'
                alt="..." />

              <img src={spring}
                className='imagen'
                alt="..." />

              <img src={spring_security}
                className='imagen'
                alt="..." />

              <img src={jwt}
                className='imagen'
                alt="..." />


              <img src={django}
                className='imagen'
                alt="..." />

              <img src={laravel}
                className='imagen'
                alt="..." />

              <img src={mysql}
                className='imagen'
                alt="..." />

              <img src={docker}
                className='imagen'
                alt="..." />

              <img src={oracle}
                className='imagen'
                alt="..." />

              <img src={amazon}
                className='imagen'
                alt="..." />

              <img src={gps}
                className='imagen'
                alt="..." />

              <img src={cloudinary}
                className='imagen'
                alt="..." />

              <img src={render}
                className='imagen'
                alt="..." />

              <img src={vercel}
                className='imagen'
                alt="..." />

              <img src={netlify}
                className='imagen'
                alt="..." />

              <img src={railway}
                className='imagen'
                alt="..." />

              <img src={firebase}
                className='imagen'
                alt="..." />

              <img src={androidStudio}
                className='imagen'
                alt="..." />

              <img src={booststrap}
                className='imagen'
                alt="..." />

              <img src={sweetalert2}
                className='imagen'
                alt="..." />

              <img src={postman}
                className='imagen'
                alt="..." />

              <img src={github}
                className='imagen'
                alt="..." />

              <img src={office}
                className='imagen'
                alt="..." />

              <img src={linux}
                className='imagen'
                alt="..." />

              <img src={azure}
                className='imagen'
                alt="..." />
            </div>
            <p><br />
              Si deseas contactarme, puedes hacerlo a través de mi dirección de correo electrónico <i className="bi bi-envelope-at negrita"> esteban_rojashe@hotmail.com</i></p>

          </div>
        </div>

        <div className='contacto' id='contacto'>
          <div className="container" >
            <div>
              <h1>Contacto</h1>
              <p>
                • Telefono <i className="bi bi-telephone negrita"> (506) 8426 19 87</i><br />
                • Whatsapp <i className="bi bi-whatsapp negrita"> (506) 8426 19 87</i><br />
                • Correo electrónico <i className="bi bi-envelope-at negrita"> esteban_rojashe@hotmail.com</i><br />
                <a href="https://www.linkedin.com/in/esteban-rojas-herrera-557458195/" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-linkedin logo-info logo-linkedin" ></i>
                </a>

                <a href="https://github.com/EstebanRoHe?tab=repositories" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-github logo-info logo-github" ></i>
                </a>
              </p>
            </div>
          </div>
        </div>



        {showModal && (
          <ModalInfo
            onClose={closeModalHandler}
            modalContent={modalContent} />
        )}

        {showModalImagenes && (
          <ModalImagenesJYT
            onClose={closeModalHandlerImagenes} />
        )}

      </div>

    </div>
      <Footer /></>
  );
}

export default App;
