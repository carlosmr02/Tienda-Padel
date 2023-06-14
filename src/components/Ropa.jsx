import React, { useEffect, useState } from 'react';
import CardRopa from './CardRopa';

function Ropa() {
  const [productos, setProductos] = useState([]);
  const [mostrarProductos, setMostrarProductos] = useState(12);
  const [totalProductos, setTotalProductos] = useState(0);
  const [palaSeleccionada, setPalaSeleccionada] = useState(null);
  const [mostrarTodasLasPalas, setMostrarTodasLasPalas] = useState(true);

  useEffect(() => {
    fetch('/Ropa.xml')
      .then(response => response.text())
      .then(xmlString => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlString, 'text/xml');
        const productosArray = Array.from(xmlDoc.getElementsByTagName('producto')).map(productoNode => ({
          imagen: productoNode.getElementsByTagName('imagen')[0].textContent,
          modelo: productoNode.getElementsByTagName('modelo')[0].textContent,
          precio: productoNode.getElementsByTagName('precio')[0].textContent,
        }));
        setTotalProductos(productosArray.length);
        setProductos(productosArray.slice(0, mostrarProductos));
      })
      .catch(error => {
        console.error('Error al cargar el archivo XML:', error);
      });
  }, [mostrarProductos]);

  const cargarMasProductos = () => {
    const nuevosProductos = mostrarProductos + 12;
    setMostrarProductos(nuevosProductos);
  };

  const seleccionarPala = (index) => {
    const pala = productos[index];
    setPalaSeleccionada(pala);
    setMostrarTodasLasPalas(false);
  };

  const volverAPalas = () => {
    setPalaSeleccionada(null);
    setMostrarTodasLasPalas(true);
  };

  return (
    <div>
      {palaSeleccionada ? (
        <CardRopa pala={palaSeleccionada} volverAPalas={volverAPalas} />
      ) : (
        <div className="container mt-5">
          <div className="row">
            {productos.map((producto, index) => (
              <div key={index} className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-4">
                <div className="card text-center shadow" onClick={() => seleccionarPala(index)}>
                  <img className="card-img-top img-fluid" src={producto.imagen} alt="" />
                  <div className="card-body">
                    <h5 className="card-title">{producto.modelo}</h5>
                    <p className="card-text">{producto.precio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {mostrarTodasLasPalas && mostrarProductos < totalProductos && (
        <div className="text-center my-5">
          <button className="btn btn-danger" onClick={cargarMasProductos}>Cargar más</button>
        </div>
      )}
    </div>
  );
}

export default Ropa;
