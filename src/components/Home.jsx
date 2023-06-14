/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { NavLink } from 'react-router-dom';
import FotoFondo from '../assets/fotofondo.jpg';
import Pala1 from '../assets/Pala1.webp';
import Pala2 from '../assets/Pala2.webp';
import Pala3 from '../assets/Pala3.png';
import Pala4 from '../assets/Pala4.webp';
import Zapatillas from '../assets/zapatillas.jpg';
import Zapatilla1 from '../assets/zapatilla1.jpg';
import Zapatilla2 from '../assets/zapatilla2.jpg';
import Zapatilla3 from '../assets/zapatilla3.jpg';

function Home() {
  return (
    <div className="div">
      <div className="text-center" id="" />
      <img className="w-100" src={FotoFondo} alt="" />
      <div className="mask" id="">
        <div className="d-flex justify-content-center mt-5 mb-5">
          <div className="card text-center shadow w-75">
            <div className="row">
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <img className="card-img-top img-fluid" src={Pala1} alt="" />
                <div className="card-body">
                  <h5 className="card-title">Syux Electra ST2 Stupa Pro</h5>
                  <p className="card-text">Esta nueva pala de Stupa tiene un buen punto dulce y es muy maniobrable.</p>
                  <p><strong>350,00 €</strong></p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <img className="card-img-top img-fluid" src={Pala2} alt="" />
                <div className="card-body">
                  <h5 className="card-title">Syux Diablo Revolution II Sanyo Pro</h5>
                  <p className="card-text">Un modelo de pala diseñada para los jugadores más exigentes, esta pala aporta un tacto y sonido espectacular.</p>
                  <p><strong>350,00 €</strong></p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <img className="card-img-top img-fluid" src={Pala3} alt="" />
                <div className="card-body">
                  <h5 className="card-title">Syux Electra ST1</h5>
                  <p className="card-text">Esta nueva pala de pádel Siux se ha fabricado en exclusiva siguiendo las exigencias de Stupa, uno de los mejores jugadores del mundo.</p>
                  <p><strong>299,00 €</strong></p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <img className="card-img-top img-fluid" src={Pala4} alt="" />
                <div className="card-body">
                  <h5 className="card-title">Syux Fenix II</h5>
                  <p className="card-text">Uno de los modelos favoritos de la marca, es una pala de potencia, dura gracias al carbono 1K, pero fácil de manejar desde el principio para los expertos.</p>
                  <p><strong>299,00 €</strong></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img className="w-100" src={Zapatillas} alt="" />
        <div className="d-flex justify-content-center mt-5 mb-5">
          <div className="card text-center p-3 shadow w-75">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <img className="card-img-top img-fluid" src={Zapatilla1} alt="" />
                <div className="card-body">
                  <h5 className="card-title">ZAPATILLA BULLPADEL VERTEX VIBRAM 23V CORAL</h5>
                  <p className="card-text">La zapatilla favorita de nuestros jugadores Juan Tello y Fede Chingotto. Modelo pensado para soportar el juego intensivo de jugadores profesionales y avanzados.</p>
                  <p><strong>169,95 €</strong></p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <img className="card-img-top img-fluid" src={Zapatilla2} alt="" />
                <div className="card-body">
                  <h5 className="card-title">ZAPATILLA BULLPADEL HACK VIBRAM 23V NEGRO</h5>
                  <p className="card-text">La zapatilla favorita de nuestro jugador Paquito Navarro. Modelo recomendado para aquellos jugadores profesionales y avanzados que piensan darle un uso intensivo.</p>
                  <p><strong>169,95 €</strong></p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <img className="card-img-top img-fluid" src={Zapatilla3} alt="" />
                <div className="card-body">
                  <h5 className="card-title">ZAPATILLA BULLPADEL VERTEX VIBRAM 23V NEGRO</h5>
                  <p className="card-text">La zapatilla favorita de nuestro jugador Martín Di Nenno. Con su nueva suela categorizada dentro del concepto de patín híbrido, se trata de un modelo perfecto para usarlo de forma intensiva en jugadores de alto nivel.</p>
                  <p><strong>169,95 €</strong></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Home;
