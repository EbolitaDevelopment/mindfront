import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Memorama = () => {
  // Datos de las cartas - Asegúrate de que las rutas de las imágenes sean correctas
  const initialCards = [
    { 
      id: 1, 
      content: "HABLAR EN PÚBLICO",
      imgSrc: "",
      description: "Miedo a hablar en público" 
    },
    { 
      id: 2, 
      content: "MIEDO A NUEVO CONTACTO",
      imgSrc: "",
      description: "Temor al contacto social" 
    },
    { 
      id: 3, 
      content: "BAJA AUTOESTIMA",
      imgSrc: "",
      description: "Suele rehuir el contacto social" 
    },
    { 
      id: 4, 
      content: "INTERACCIONES",
      imgSrc: "",
      description: "Miedo a interacciones con nuevas personas" 
    },
    { 
        id: 5, 
        content: "INTERACCIONES",
        imgSrc: "",
        description: "Miedo a interacciones con nuevas personas" 
      }
  ];

  // Estado del juego
  const [gameCards, setGameCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState([]);
  const [gameWon, setGameWon] = useState(false);
  const [moves, setMoves] = useState(0);

  // Inicializar el juego
  useEffect(() => {
    // Duplicar las cartas y mezclarlas
    const allCards = [...initialCards, ...initialCards].map((card, index) => ({
      ...card,
      id: index + 1 // Asignar nuevos IDs únicos
    }));
    const shuffledCards = allCards.sort(() => Math.random() - 0.5);
    setGameCards(shuffledCards);
  }, []);

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

      if (firstCard.content === secondCard.content) {
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

  // Reiniciar el juego
  const resetGame = () => {
    const allCards = [...initialCards, ...initialCards].map((card, index) => ({
      ...card,
      id: index + 1
    }));
    const shuffledCards = allCards.sort(() => Math.random() - 0.5);
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
    <Porno>
    <div className="game-container">
      <div className="game-wrapper">
        <div className="game-panel">
          <div className="game-header">
            <div>
              <h2 className="game-title">AFECCIONES</h2>
              <p className="game-attempts">Intentos: {moves}</p>
            </div>
            <button
              onClick={resetGame}
              className="reset-button"
            >
              <span>🔄</span> Reiniciar
            </button>
          </div>
          
          <div className="game-grid">
            {gameCards.map((card) => (
              <div
                key={card.id}
                onClick={() => handleCardClick(card.id)}
                className={`
                  game-card 
                  ${(flippedCards.includes(card.id) || matchedPairs.includes(card.id)) 
                    ? 'revealed' 
                    : 'hidden'}
                `}
              >
                <div className="card-content">
                  {(flippedCards.includes(card.id) || matchedPairs.includes(card.id)) ? (
                    <>
                      <div className="card-image-container">
                        <img 
                          src={card.imgSrc} 
                          alt={card.content}
                          className="card-image"
                        />
                      </div>
                      <h3 className="card-title">
                        {card.content}
                      </h3>
                      <p className="card-description">
                        {card.description}
                      </p>
                    </>
                  ) : (
                    <div className="mystery-icon">
                      <img src='memoramaback.png' />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {gameWon && (
            <div className="win-message">
              <h3 className="win-message-title">¡Felicitaciones! 🎉</h3>
              <p>Has completado el memorama en {moves} intentos.</p>
            </div>
          )}
        </div>
      </div>
    </div>
    </Porno>
  );
};

export default Memorama;
const Porno = styled.div`
/* Global and Layout Styles */
.game-container {
    min-height: 100vh;
    background-color: #f3f4f6; /* bg-gray-100 */
    padding: 2rem 0;
}

.game-wrapper {
    max-width: 64rem; /* max-w-4xl */
    margin-left: auto;
    margin-right: auto;
    padding: 0 1rem;
}

.game-panel {
    background-color: white;
    border-radius: 0.75rem; /* rounded-xl */
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1); /* shadow-lg */
    padding: 1.5rem; /* p-6 */
}

/* Header Styles */
.game-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem; /* mb-6 */
}

.game-title {
    font-size: 1.875rem; /* text-3xl */
    font-weight: bold;
    color: #f97316; /* text-orange-400 */
}

.game-attempts {
    font-size: 0.875rem; /* text-sm */
    color: #4b5563; /* text-gray-600 */
}

.reset-button {
    padding: 1rem 1.5rem; /* px-6 py-3 */
    background-color: #3b82f6; /* bg-blue-500 */
    color: white;
    border-radius: 0.5rem; /* rounded-lg */
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: background-color 0.3s;
}

.reset-button:hover {
    background-color: #2563eb; /* hover:bg-blue-600 */
}

/* Game Grid Styles */
.game-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem; /* gap-4 */
}

@media (min-width: 768px) {
    .game-grid {
        grid-template-columns: repeat(4, 1fr); /* md:grid-cols-4 */
    }
}

/* Card Styles */
.game-card {
    position: relative;
    aspect-ratio: 1 / 1;
    cursor: pointer;
    border-radius: 0.75rem; /* rounded-xl */
    transition: all 0.3s ease;
}

.game-card.hidden {
    background-color: #fdba74; /* bg-orange-300 */
}

.game-card.hidden:hover {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1); /* hover:shadow-lg */
    transform: translateY(-0.25rem); /* hover:-translate-y-1 */
}

.game-card.revealed {
    background-color: #dbeafe; /* bg-blue-50 */
    border: 2px solid #93c5fd; /* border-blue-200 */
}

.card-content {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
}

.card-image-container {
    width: 5rem; /* w-20 */
    height: 5rem; /* h-20 */
    margin-bottom: 0.75rem; /* mb-3 */
    border-radius: 0.5rem; /* rounded-lg */
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* shadow-md */
}

.card-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.card-title {
    font-size: 0.875rem; /* text-sm */
    font-weight: bold;
    text-align: center;
    margin-bottom: 0.25rem; /* mb-1 */
}

.card-description {
    font-size: 0.75rem; /* text-xs */
    color: #4b5563; /* text-gray-600 */
    text-align: center;
}

.mystery-icon {
    font-size: 3.75rem; /* text-6xl */
    color: #f97316; /* text-orange-500 */
}
.mystery-icon img{
    width: 100%;
}
/* Win Message Styles */
.win-message {
    margin-top: 1.5rem; /* mt-6 */
    padding: 1rem; /* p-4 */
    background-color: #dcfce7; /* bg-green-100 */
    border: 1px solid #bbf7d0; /* border-green-200 */
    color: #166534; /* text-green-800 */
    border-radius: 0.5rem; /* rounded-lg */
    text-align: center;
}

.win-message-title {
    font-size: 1.125rem; /* text-lg */
    font-weight: bold;
    margin-bottom: 0.25rem; /* mb-1 */
}
`