import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Cookies from 'js-cookie';

const Sesiones = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const token = Cookies.get('jwt');
        if (!token) {
          setIsLoggedIn(false);
          setLoading(false);
          return;
        }

        const response = await fetch("http://localhost:4000/api/autorizacion", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}` // Consider adding Authorization header
          },
          body: JSON.stringify({ cookie: token })
        });

        const result = await response.json();
        setIsLoggedIn(!!result);
      } catch (error) {
        console.error('Error fetching login status:', error);
        setIsLoggedIn(false);
      } finally {
        setLoading(false);
      }
    };

    checkLoginStatus();
  }, []);

  const handleLogout = async (e) => {
    e.preventDefault();

    Cookies.remove('jwt', { path: '/' });
    Cookies.remove('retos', { path: '/' });
    
    setIsLoggedIn(false);
  };

  if (loading) {
    return <div>Loading...</div>; // Optional loading state
  }

  return (
    <Styles>
      <div className="central">
        {isLoggedIn ? (
          <p>
            <a href="/" onClick={handleLogout}>CERRAR SESIÓN</a>
          </p>
        ) : (
          <p>
            <a href='/iniciosesion'>INICIAR SESIÓN</a>   
            <a href='/registro'>CREAR CUENTA</a>
          </p>
        )}
      </div>
    </Styles>
  );
};
export default Sesiones;
const Styles = styled.nav`
  @import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@100..900&display=swap');
  .font-style-title {font-family:'League Spartan', sans-serif !important; }
  .font-style-subtitle {font-family: 'League Spartan', sans-serif !important; }
  .font-style-heading {font-family: 'League Spartan', sans-serif !important; }
  .font-style-normalText {font-family: 'League Spartan', sans-serif !important; }

  * {
    font-family: League Spartan;
  }

  .central {
    width: 100%;
    text-align: right;
    color: #008dda;
  }

  a {
    color: #008dda; 
    font-weight: bolder;
    text-decoration: none; 
    font-size: 4vh; 
    padding: 15px; 
  }

  p {
    margin: 10px;
  }
  .espacio {
    width: 5%;
  }
`;
