import React, { useState } from 'react';
import './create-styles.css';

function Create() {
  const [usuario, setUsuario] = useState('');
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [infos, setinfos] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newinfo = { usuario, nombre, email };
    setinfos([...infos, newinfo]);
    setUsuario('');
    setNombre('');
    setEmail('');
  };

  const handleEdit = (index) => {
    const infoToEdit = infos[index];
    setUsuario(infoToEdit.usuario);
    setNombre(infoToEdit.nombre);
    setEmail(infoToEdit.email);
  };

  const handleDelete = (index) => {
    setinfos(infos.filter((info, i) => i !== index));
  };

  return (
    <div className="create-wrap">
      <div className="create-crud">
        <div className="create-text">
          <h1>Crea Una Cuenta</h1>
        </div>
        <div className="crud-imputs">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="usuario">Usuario:</label>
              <input type="text" className="form-control" id="usuario" value={usuario} onChange={(e) => setUsuario(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="nombre">Nombre:</label>
              <input type="text" className="form-control" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="email">Correo electrónico:</label>
              <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="button-div">
              <button className="crud-button">Crear</button>
            </div>
          </form>
        </div>
        <div className="records-list">
          {infos.map((info, index) => (
            <div key={index} className="record">
              <p>Usuario: {info.usuario}</p>
              <p>Nombre: {info.nombre}</p>
              <p>Correo electrónico: {info.email}</p>
              <button className="edit-button" onClick={() => handleEdit(index)}>Editar</button>
              <button className="delete-button" onClick={() => handleDelete(index)}>Eliminar</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Create;