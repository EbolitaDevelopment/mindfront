import React from 'react';
import styled from 'styled-components';  

    const Cuestionario = () => {
      return (
        <Quest>
          <div class="subtitle">LUGARES:</div>
          <div class="description">
            Indica con qué frecuencia evitas los lugares, utilizando la escala de niveles que presentamos.<br />
            En cuanto al nivel de malestar que le producen.<br />
            Utilice la escala de nivel de malestar que se producen.<br />
            Utilice la escala siguiente:
          </div>
    
          <div class="radio-group">
            <label class="radio-label">
              <input type="radio" name="nivel" /> 5-no se sufre
            </label>
            <label class="radio-label">
              <input type="radio" name="nivel" /> 4-hay sufrir ligeramente
            </label>
            <label class="radio-label">
              <input type="radio" name="nivel" /> 3-se sufre moderadamente
            </label>
            <label class="radio-label">
              <input type="radio" name="nivel" /> 2-hay sufrir bastante
            </label>
            <label class="radio-label">
              <input type="radio" name="nivel" /> 1-se sufre mucho
            </label>
          </div>
    
          <div class="table-container">
            <table>
              <tr>
                <td width="50%">Metro o estacionamiento</td>
                <td><input type="text" /></td>
              </tr>
              <tr>
                <td>Hospitales</td>
                <td><input type="text" /></td>
              </tr>
              <tr>
                <td>Mercado</td>
                <td><input type="text" /></td>
              </tr>
              <tr>
                <td>Plazas</td>
                <td><input type="text" /></td>
              </tr>
              <tr>
                <td>Supermercados</td>
                <td><input type="text" /></td>
              </tr>
              <tr>
                <td>Restaurantes</td>
                <td><input type="text" /></td>
              </tr>
              <tr>
                <td>Cafeterías y comida rápida</td>
                <td><input type="text" /></td>
              </tr>
              <tr>
                <td>Además (el campo, otros edificios, pista)</td>
                <td><input type="text" /></td>
        </tr>
        <tr>
            <td>Número de habitaciones posibles (ponga)</td>
            <td><input type="text" /></td>
        </tr>
    </table>
</div>

<div class="table-container">
    <table>
        <tr>
            <td colspan="2">SITUACIONES:</td>
            <td colspan="2">TELETRANSPORTES:</td>
        </tr>
        <tr>
            <td>Durante el día</td>
            <td><input type="text" /></td>
            <td>Puntos</td>
            <td><input type="text" /></td>
        </tr>
        <tr>
            <td>Durante la noche</td>
            <td><input type="text" /></td>
            <td>Puntos</td>
            <td><input type="text" /></td>
        </tr>
        <tr>
            <td>Cuando presente ansiedad</td>
            <td><input type="text" /></td>
            <td>Salones</td>
            <td><input type="text" /></td>
        </tr>
        <tr>
            <td>Cuando toma la vida</td>
            <td><input type="text" /></td>
            <td>Salones</td>
            <td><input type="text" /></td>
        </tr>
        <tr>
            <td>Estar fuera de casa</td>
            <td><input type="text" /></td>
            <td>Residencia o lugar en medio</td>
            <td><input type="text" /></td>
        </tr>
    </table>
</div>

<div class="note">
    * Indicar el número y todos los otros de pánico que se han tenido en los 3 últimos días, teniendo en cuenta que se define un ataque de pánico como:<br />
    * Para dar nivel de ansiedad experimentado al: (paroxístico: comienzo o iniciación súbita; tendencia rápidamente, máximos; morosos; náuseas)<br />
    * Para ser tratada de la ansiedad experimentada, no se trata sentado, ponerle nombre y apellido.
</div>

<button class="create-account-btn">CREAR CUENTA</button>
</Quest>
)}
export default Cuestionario;

const Quest = styled.nav`        
        body {
            background-color: #f7eedd;
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        .header {
            color: #008dda;
            font-weight: bold;
            font-size: 24px;
            margin-bottom: 20px;
        }
        .description,label{
        color:black ;
        font-size: 12px;
        }
        .subtitle {
            color: #f95f5e;
            font-weight: bold;
            margin: 15px 0;
        }
        .description {
            font-size: 14px;
            margin: 10px 0;
        }
        .table-container {
            margin: 15px 0;
            border: 1px solid #ccc;
            background-color: #fff;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            background-color: #e6eef9;
            color: black;
            font-size: 12px;
        }
        td {
            padding: 8px;
            border: 1px solid #b3c6e7;
            color: black;
        }
        input[type="text"] {
            width: 100%;
            padding: 4px;
            border: 1px solid #b3c6e7;
            background-color: white;
            color: black;
        }
        .radio-group {
            margin: 10px 0;
        }
        .radio-label {
            display: block;
            margin: 5px 0;
        }
        .create-account-btn {
            background-color: #f95f5e;
            color: black;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            margin-top: 20px;
            display: block;
            margin-left: auto;
            margin-right: auto;
        }
        .note {
            font-size: 12px;
            margin: 10px 0;
            color: black
        }
        `    