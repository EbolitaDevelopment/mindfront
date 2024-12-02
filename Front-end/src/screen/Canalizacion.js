import React, { useState } from 'react';
import styled from 'styled-components';

const Canalizacion = () => {
  const [hospital, setHospital] = useState({
    nombre: '',
    estado: '',
    locacion: ''
  });

  const [selectedState, setSelectedState] = useState('');

  const hospitales = [
    {
      nombre: "Hospital Psiquiátrico Fray Bernardino Álvarez",
      estado: "Ciudad de México",
      municipio: "Tlalpan",
      colonia: "Tlalpan",
      direccion: "Calle Niño Jesús No. 2",
      telefono: "55-5655-4405",
      correoElectronico: "rosa.pazaran@salud.gob.mx"
    },
    {
      nombre: "Hospital Psiquiátrico Infantil Dr. Juan N. Navarro",
      estado: "Ciudad de México", 
      municipio: "Tlalpan",
      colonia: "Belisario Domínguez",
      direccion: "San Buenaventura No. 86",
      telefono: "55-5573-4844",
      correoElectronico: "emmanuel.sarmiento@salud.gob.mx"
    },
    {
      nombre: "Hospital Psiquiátrico Dr. Samuel Ramírez Moreno",
      estado: "Ciudad de México",
      municipio: "Tláhuac",
      colonia: "Santa Catarina",
      direccion: "Km 5.5 Autopista México-Puebla",
      telefono: "55-5860-1530",
      correoElectronico: "cesar.banuelos@salud.gob.mx"
    },
    {
      nombre: "Hospital Psiquiátrico Dr. Adolfo M. Nieto",
      estado: "Estado de México",
      municipio: "Acolman",
      colonia: "Tepexpan",
      direccion: "Carr. Fed. México Pirámides Km.32.5",
      telefono: "594-957-0003",
      correoElectronico: "direccion.hmnieto@hotmail.com"
    },
    {
      nombre: "Hospital Psiquiátrico José Sayago",
      estado: "Estado de México", 
      municipio: "Acolman",
      colonia: "Tepexpan",
      direccion: "Carr. Fed. México - Pirámides Km.33.5",
      telefono: "594-957-1836",
      correoElectronico: "hospitaljosesayago@hotmail.com"
    },
    {
      nombre: "Hospital Psiquiátrico Granja La Salud",
      estado: "Estado de México",
      municipio: "Ixtapaluca", 
      colonia: "Zoquiapan",
      direccion: "Carr. Fed. México-Puebla K, 33.5",
      telefono: "55-5972-0028",
      correoElectronico: "granjalasalud@yahoo.com"
    },
    {
      nombre: "Hospital Psiquiátrico Villa Ocaranza",
      estado: "Hidalgo",
      municipio: "Tolcayuca",
      colonia: "San Miguel Eyecalco", 
      direccion: "Carretera México Pachuca Km. 62.5",
      telefono: "743-791-3116",
      correoElectronico: "villaocaranza@hotmail.com"
    },
    {
      nombre: "Hospital Psiquiátrico Dr. Rafael Serrano",
      estado: "Puebla",
      municipio: "Heroica Puebla de Zaragoza", 
      colonia: "Lomas de San Miguel",
      direccion: "Carretera A Valsequillo Km 7.5",
      telefono: "222-221-6139",
      correoElectronico: "direccionpsiquiatricopuebla@hotmail.com"
    }
  ];

  const cambioEstado = (e) => {
    setSelectedState(e.target.value);
  };

  const mostrarHospital = () => {
    // Encuentra el primer hospital del estado seleccionado
    const hospitalEncontrado = hospitales.find(h => h.estado === selectedState);
    
    if (hospitalEncontrado) {
      setHospital({
        nombre: hospitalEncontrado.nombre,
        estado: hospitalEncontrado.estado,
        locacion: `${hospitalEncontrado.municipio}, ${hospitalEncontrado.colonia}`
      });
    } else {
      setHospital({
        nombre: '',
        estado: '',
        locacion: ''
      });
    }
  };

  return (
    <Can>
    <div className="content">
      <h1>CANALIZACIÓN</h1>
      <p className="description">
        Si después de utilizar las herramientas que buscamos proporcionar no se siente ningún progreso y considera que está en un nivel avanzado de pánico social o generó algún tipo de trastorno psicológico como ansiedad elevada o depresión con niveles que requieren de medicinas, nuestro programa ya no será útil ya que más que una aplicación para curar es para aprender a llevar las tensiones que la afección puede provocar en una vida cotidiana y a prevenir que escale a niveles que requieran de atención médica formal debido a trastornos generados por la misma.
        <br/><br/>
        Para poder seguir ayudando a los usuarios de nuestra plataforma aunque no sea con el servicio, en esta sección presentamos algunas propuestas de atención médica formal tanto pública como privada para el tratamiento más avanzado de la afección.
      </p>
      <div className='hospitales'>
        <div className="hospital-info">
          <h2>HOSPITALES CERCANOS</h2>
          <p>
            ESTADO: {hospital.estado}<br/>
            UBICACIÓN: {hospital.locacion}<br/>
            NOMBRE: {hospital.nombre}<br/>
            AFILIACIÓN: GUBERNAMENTAL
          </p>
        </div>
        <div>
          <select 
            name="selecthospital" 
            className='input'
            value={selectedState}
            onChange={cambioEstado}
          >
            <option>Selecciona un Estado</option>
            <option>Ciudad de México</option>
            <option>Estado de México</option>
            <option>Hidalgo</option>
            <option>Puebla</option>
          </select>
          <button 
            className="button" 
            onClick={mostrarHospital}
          >
            Mostrar Locaciones
          </button>
        </div>
      </div>
    </div>
    </Can>
  );
};

export default Canalizacion;
const Can = styled.nav`
   @import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@100..900&display=swap');
        .font-style-title {font-family:'League Spartan', sans-serif !important; } 
        .font-style-subtitle {font-family: 'League Spartan', sans-serif !important; } 
        .font-style-heading {font-family: 'League Spartan', sans-serif !important; } 
        .font-style-normalText {font-family: 'League Spartan', sans-serif !important; }
*{
    background-color: #f7eedd;
    margin-right:5%;
    margin-left:5%;
}

h1{
    font-size: 7vh;
    color: #008dda;
    text-align: center;
    margin-bottom: 1%;

}
    .hospital-info {
    margin:0;
    }
    .hospital-info p, .hospital-info h2{
    margin-left:0;
    }
    h2{
    font-size: 5vh;
    color: #008dda;
    text-align: left;
    margin-bottom: 1%;

}
p{
    font-size: 25px;
    color: black;
    text-align: justify;
    margin-bottom: 0;
}
.content{
  height:88.7vh;
}
.hospitales{
    display: grid;
    grid-template-columns: 60% 32%; /* Divide el contenedor en dos columnas iguales */;
    gap:8%;
    }

  .button , .input{
            width: 100%;
            border: 0;
            margin-top: 10%;
            margin-bottom: 10%;
            padding: 10%;
            font-family: League Spartan;
            border-radius: 100px;
            font-size: 3.3vh;
            cursor: pointer;
            display: block; 
            
        }
  select{
   background-color: #ace2e1;
    color: #008dda;
  }
    button{
    background-color: #008dda;
    color: #ace2e1;
    }
    .button:hover {
    background-color: #009dda;
      color: #fff;
  }

.select-state-btn, .show-locations-btn {
  width: 250px; 
  background-color: #ace2e1; 
  border: none; 
  border-radius: 100px; 
  padding: 15px; 
  font-size: 20px; 
  color: black; 
  font-family: 'League Spartan', sans-serif;
  cursor: pointer; 
  text-align: center;
}

`;