import React from 'react';
import { NavLink } from 'react-router-dom';

function CardPalas({ pala, volverAPalas }) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-4">
          <div className="card text-center shadow">
            <img className="card-img-top img-fluid" src={pala.imagen} alt="" />
            <div className="card-body">
              <h5 className="card-title">{pala.modelo}</h5>
              <p className="card-text">{pala.precio} €</p>
            </div>
          </div>
        </div>
        <div className="col-4 mx-5">
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Correo electrónico</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Nombre y apellidos</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Numero de cuenta</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">DNI</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <NavLink to="https://www.bullpadel.com/" className="btn btn-dark">Comprar</NavLink>
          </form>
        </div>
      </div>
      <div className="text-center">
        <button className="btn btn-primary mb-5" onClick={volverAPalas}>Volver a todas las palas</button>
      </div>
    </div>
  );
}

export default CardPalas;
