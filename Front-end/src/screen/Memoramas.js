import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Memorama = () => {
  // Datos de las cartas - Asegúrate de que las rutas de las imágenes sean correctas
  const initialCards = [
    { id: 1, content: "HABLAR EN PÚBLICO", description: "Miedo a hablar en público", type: "description" },
    { id: 2, content: "HABLAR EN PÚBLICO", description: "Miedo a hablar en público", type: "image", imgSrc: "memorama.png"  },
    { id: 3, content: "MIEDO A NUEVO CONTACTO", description: "Temor al contacto social", type: "description" },
    { id: 4, content: "MIEDO A NUEVO CONTACTO", description: "Temor al contacto social", type: "image" , imgSrc: "memorama.png" },
    { id: 5, content: "BAJA AUTOESTIMA", description: "Suele rehuir el contacto social", type: "description" },
    { id: 6, content: "BAJA AUTOESTIMA", description: "Suele rehuir el contacto social", type: "image" , imgSrc: "memorama.png" },
    { id: 7, content: "INTERACCIONES", description: "Miedo a interacciones con nuevas personas", type: "description" },
    { id: 8, content: "INTERACCIONES", description: "Miedo a interacciones con nuevas personas", type: "image" , imgSrc: "memorama.png" },
    
    // Nueva carta 9
    { id: 9, content: "FALTA DE CONFIANZA", description: "Dificultad para confiar en los demás", type: "description" },
    { id: 10, content: "FALTA DE CONFIANZA", description: "Dificultad para confiar en los demás", type: "image", imgSrc: "memorama.png"  }
  ];
  

  const [gameCards, setGameCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState([]);
  const [gameWon, setGameWon] = useState(false);
  const [moves, setMoves] = useState(0);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Intercambia los elementos
    }
  };
  

  // Manejar el clic en una carta
  const handleCardClick = (cardId) => {
    if (
      flippedCards.length === 2 ||
      flippedCards.includes(cardId) ||
      matchedPairs.includes(cardId)
    ) {
      return;
    }

    const newFlippedCards = [...flippedCards, cardId];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      setMoves(prev => prev + 1);
      const [firstId, secondId] = newFlippedCards;
      const firstCard = gameCards.find(card => card.id === firstId);
      const secondCard = gameCards.find(card => card.id === secondId);

      if (firstCard.content === secondCard.content && firstCard.type !== secondCard.type) {
        setMatchedPairs([...matchedPairs, firstId, secondId]);
        setFlippedCards([]);
        
        if (matchedPairs.length + 2 === gameCards.length) {
          setGameWon(true);
        }
      } else {
        setTimeout(() => {
          setFlippedCards([]);
        }, 1000);
      }
    }
  };

  useEffect(() => {
    const shuffledCards = [...initialCards];
    shuffleArray(shuffledCards);
    setGameCards(shuffledCards);
  }, []);
  
  const resetGame = () => {
    const shuffledCards = [...initialCards];
    shuffleArray(shuffledCards);
    setGameCards(shuffledCards);
    setFlippedCards([]);
    setMatchedPairs([]);
    setGameWon(false);
    setMoves(0);
  };
  
  // Si no hay cartas, mostrar un mensaje de carga
  if (gameCards.length === 0) {
    return <div>Cargando juego...</div>;
  }

  return (
    <Memo>
      <div className="game-wrapper">
        <div className="reset">
          <p><h1>AFECCIONES</h1>Intentos: {moves}</p>
        </div>
        
        <div className="game-grid">
          {gameCards.map((card) => {
            const isRevealed = flippedCards.includes(card.id) || matchedPairs.includes(card.id);
            
            return (
              <div
                key={card.id}
                onClick={() => handleCardClick(card.id)}
                className={`
                  game-card 
                  ${isRevealed ? 'revealed' : 'hidden'}
                `}
              >
                <div className="card-content">
                  {isRevealed ? (
                    card.type === 'description' ? (
                      <>
                        <h3 className="card-title">{card.content}</h3>
                        <p className="card-description">{card.description}</p>
                      </>
                    ) : (
                      <>
                        <div className="card-image-container">
                          <img 
                            src={card.imgSrc || 'default-image.png'} 
                            alt={card.content}
                            className="card-image"
                          />
                        </div>
                        <h3 className="card-title">{card.content}</h3>
                      </>
                    )
                  ) : (
                    <div className="mystery-icon">
                      <img src='memoramaback.png' alt="Card Back" />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <div className='conditions'>
          <button
            onClick={resetGame}
            className={`reset-button ${gameWon ? 'move-left' : ''}`}
          >
            Reiniciar
          </button>

          {gameWon && (
            <div className="win-message move-right">
              <h3 className="win-message-title">¡Felicitaciones! </h3>
              <p>Has completado el memorama en {moves} intentos.</p>
            </div>
          )}
        </div>
      </div>
    </Memo>
  );
};

export default Memorama;

// El resto del CSS permanece igual al código anterior
const Memo = styled.div`
  // ... (todo el CSS anterior se mantiene igual)
  * {
    font-family: 'League Spartan', sans-serif;
  }
  h1 {
    font-size: 7vh;
    color: #008dda;
    margin-bottom: 1%;
  }
  p {
    font-size: 3vh;
    color: black;
    text-align: center;
    margin-top: 0;
  }
  .game-wrapper {
    width: 80%;
    height: 89vh;
    padding: 0;
    margin: 0 10%;
  }
  .conditions{
    display: grid;
    grid-template-columns: 50% auto;
    min-grid-template-columns: 50% 50%;
  }
  .game-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  @media (min-width: 768px) {
    .game-grid {
      grid-template-columns: repeat(5, 1fr);
    }
  }

  .reset-button {
    margin-left: 60%;
    margin-right: 35%;
    width: 80%;
    background-color: #008dda;
    border: 0;
    margin-top: 20px;
    padding: 8%;
    color: #ace2e1;
    font-size: 1.3rem;
    font-family: 'League Spartan', sans-serif;
    border-radius: 150px;
    font-size: 1.2rem;
    cursor: pointer;
    transition: transform 0.5s ease, margin-left 0.5s ease;
  }

  .reset-button:hover {
    background-color: #009dda;
    color: #fff;
  }

  .reset-button.move-left {
    width: 80%;
    background-color: #008dda;
    border: 0;
    margin-top: 20px;
    padding: 3%;
    color: #ace2e1;
    font-size: 1.3rem;
    font-family: 'League Spartan', sans-serif;
    border-radius: 150px;
    font-size: 1.2rem;
    cursor: pointer;
    transition: transform 0.5s ease, margin-left 0.5s ease;
    margin-left: 30%;
    margin-right: 0;
    transform: translateX(-25%);
  }

  .win-message {
    margin-top: 1.5rem;
    background-color: #dcfce7;
    border: 1px solid #bbf7d0;
    color: #008dda;
    border-radius: 0.5rem;
    text-align: center;
    transition: transform 0.5s ease, margin-left 0.5s ease;
  }
  .win-message p{
    font-size: 2vh;
  }
    
  .win-message.move-right {
    margin-left: 0;
    transform: translateX(30%);
    width:70%;
    padding: 0;
  }

  .win-message-title {
    font-size: 4vh;
    margin-bottom: 5%;
    font-weight: bold;
  }

  .game-card {
    position: relative;
    aspect-ratio: 1 / 1;
    cursor: pointer;
    border-radius: 0.75rem;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .game-card.hidden {
    background-color: #fdba74;
  }

  .game-card.hidden:hover {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    transform: translateY(-0.25rem);
  }

  .game-card.revealed {
    width: 100%;
    height: auto;
  }

  .card-content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0;
  }

  .card-image-container {
    width: 5rem;
    height: 5rem;
    margin-bottom: 0.75rem;
    border-radius: 0.5rem;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .card-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .card-title {
    font-size: 0.875rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 0.25rem;
  }

  .card-description {
    font-size: 0.75rem;
    color: #4b5563;
    text-align: center;
    padding: 0 0.5rem;
  }

  .mystery-icon {
    font-size: 3.75rem;
    color: #f97316;
  }

  .mystery-icon img {
    width: 80%;
    align-items: middle;
    padding: 10% 10%;
  }
`;