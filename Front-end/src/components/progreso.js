import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title, CategoryScale, LinearScale } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import Cookies from 'js-cookie';

// Register ChartJS components
ChartJS.register(ArcElement, Tooltip, Legend, Title, CategoryScale, LinearScale);

const Progreso = () => {
  const [progreso, setProgreso] = useState({
    retosCompletados: 0,
    retosPendientes: 125,
    nivel: 1,
    progreso: 0,
  });

  // Function to fetch data from database|
  
     const obtenerDatosDesdeDB = async () => {
       try {
         // Obtener la cookie
         const token = Cookies.get('jwt');
         
         // Log detallado
         console.log('Token JWT recuperado:', token);
  
         if (!token) {
           throw new Error("No se encontró la cookie JWT");
         }
  
         // Preparar el cuerpo de la solicitud
         const requestBody = {
           token: token  // Cambiar 'user' por 'token'
         };
  
         console.log('Cuerpo de la solicitud:', requestBody);
  
         const response = await fetch('http://localhost:4000/api/progreso', {
           method: "POST",
           headers: {
             "Content-Type": "application/json",
           },
           body: JSON.stringify(requestBody),
         });
  
         // Log del código de estado
         console.log('Código de estado:', response.status);
  
         // Manejar respuestas no exitosas
         if (!response.ok) {
           const errorText = await response.text();
           console.error('Error de respuesta:', errorText);
           throw new Error(`HTTP error! status: ${response.status}`);
         }
  
         // Intentar parsear la respuesta
         const progresoData = await response.json();
         
         // Log de los datos recibidos
         console.log('Datos recibidos:', progresoData);
  
         return {
           retosCompletados: progresoData.body || 0,
           retosPendientes: 125 - (progresoData.body || 0),
           nivel: progresoData.body2 || 1,
           progreso: progresoData.body || 0,
         };
       } catch (error) {
         // Log del error completo
         console.error('Error detallado:', error);
  
         // Manejo de errores más específico
         if (error.name === 'TypeError') {
           console.error('Error de red o parsing');
         }
  
         return {
           retosCompletados: 0,
           retosPendientes: 125,
           nivel: 1,
           progreso: 0,
         };
       }
     };
  
    
  
  // Effect to fetch and update progress data
  useEffect(() => {
    const fetchData = async () => {
      const data = await obtenerDatosDesdeDB();
      setProgreso(data);
    };

    fetchData();
    const intervalId = setInterval(fetchData, 60000); // Update every minute

    return () => clearInterval(intervalId);
  }, []);

  // Chart data configuration
  const chartData = {
    labels: ['Retos Completados', 'Retos Pendientes'],
    datasets: [{
      label: 'Retos',
      data: [progreso.retosCompletados, progreso.retosPendientes],
      backgroundColor: ['#008DDA', '#ACE2E1'],
      borderWidth: 1,
    }]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <><div>
    <p>       
          Debido a que has completado {progreso.progreso} retos,durante x 
          días tu progreso ha mejorado a un xx% de la terapia de exposición.Ahora mismo te encuentras en el nivel {progreso.nivel}.
        </p></div>
      <div className="chart-container" >
        <Doughnut data={chartData} options={chartOptions}  />
      </div>
      
    </>
  );
};

export default Progreso;