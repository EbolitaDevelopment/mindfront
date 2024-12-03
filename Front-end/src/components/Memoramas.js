import React, { useState, useEffect } from 'react';
import styled,{keyframes} from 'styled-components';
import Cookies from 'js-cookie';

const flipAnimation = keyframes`
  0% {
    transform: perspective(400px) rotateY(0);
  }
  50% {
    transform: perspective(400px) rotateY(90deg);
  }
  100% {
    transform: perspective(400px) rotateY(0);
  }
`;

const medalAnimation = keyframes`
  0% {
    transform: scale(0);
    opacity: 0;
  }
  70% {
    transform: scale(1.2);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const Memorama = ({ gameType, onBackToGames }) => {
  const [gameCards, setGameCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState([]);
  const [gameWon, setGameWon] = useState(false);
  const [moves, setMoves] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const getMemorama = async () => {
    try {
      const token = Cookies.get('jwt'); 
      const response = await fetch('http://localhost:4000/api/memorama', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          tipo: gameType,
          cookie: token
        })
      });

      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }

      const resJson = await response.json(); 
      const memorama = resJson.body;
      console.log(memorama)
      return [
        { id: 1, content: "1", description: memorama[0].descripcion, type: "description", style: "" },
        { id: 2, content: "1", description: memorama[0].descripcion, type: "image", imgSrc: "", style: "" },
        { id: 3, content: "2", description: memorama[1].descripcion, type: "description", style: "" },
        { id: 4, content: "2", description: memorama[1].descripcion, type: "image", imgSrc: "", style: "" },
        { id: 5, content: "3", description: memorama[2].descripcion, type: "description", style: "" },
        { id: 6, content: "3", description: memorama[2].descripcion, type: "image", imgSrc: "", style: "" },
        { id: 7, content: "4", description: memorama[3].descripcion, type: "description", style: "" },
        { id: 8, content: "4", description: memorama[3].descripcion, type: "image", imgSrc: "", style: "" },
        { id: 9, content: "5", description: memorama[4].descripcion, type: "description", style: "" },
        { id: 10, content: "5", description: memorama[4].descripcion, type: "image", imgSrc: "", style: "" }
      ];
    } catch (error) {
      console.error('Error fetching memorama:', error);
      return [];
    }
  };

  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const filterCards = (cards) => {
    switch (gameType) {
      case 'afecciones-cientifica':
        return cards.filter(card => card.style === '');
      case 'afecciones-social':
        return cards.filter(card => card.style === '');
      case 'fisica-cerebro':
        return cards.filter(card => card.style === '');
      default:
        return cards;
    }
  };

  useEffect(() => {
    const fetchCardsAndInitializeGame = async () => {
      setIsLoading(true);
      const initialCards = await getMemorama();
      const filteredCards = filterCards(initialCards);
      const shuffledCards = shuffleArray(filteredCards);
      
      setGameCards(shuffledCards);
      setIsLoading(false);
    };

    fetchCardsAndInitializeGame();
  }, [gameType]);

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
        setMatchedPairs(prev => [...prev, firstId, secondId]);
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

  const resetGame = async () => {
    setIsLoading(true);
    const initialCards = await getMemorama();
    const filteredCards = filterCards(initialCards);
    const shuffledCards = shuffleArray(filteredCards);
    
    setGameCards(shuffledCards);
    setFlippedCards([]);
    setMatchedPairs([]);
    setGameWon(false);
    setMoves(0);
    setIsLoading(false);
  };

  if (isLoading) {
    return <div>Cargando juego...</div>;
  }

  const titulo = gameType.replace(/-/g, ' ').toUpperCase();

  return (
    <Ejemplo>
      <div className="game-wrapper">
      {gameWon && (
        <MedalOverlay>
          <div className="modal-content">
            <CloseButton onClick={() => setGameWon(false)}>✕</CloseButton>
            <div className="medal-container">
              <MedalIcon>🏅</MedalIcon>
              <h2>¡Felicitaciones!</h2>
              <p>Completaste el memorama en {moves} intentos</p>
              <button onClick={resetGame}>Jugar de Nuevo</button>
            </div>
          </div>
        </MedalOverlay>
      )}
        <div className="reset">
          <button onClick={onBackToGames} className="back-to-games">
            Volver a Juegos
          </button>
        </div>
        <h1>{titulo}</h1>
        <p>Intentos: {moves}</p>
        <div className="game-grid">
          {gameCards.map((card) => (
            <div 
              key={card.id} 
              className={`game-card ${
                matchedPairs.includes(card.id) ? 'revealed matched' : 
                flippedCards.includes(card.id) ? 'revealed' : 'hidden'
              }`}
              onClick={() => handleCardClick(card.id)}
            >
              {(matchedPairs.includes(card.id) || flippedCards.includes(card.id)) ? (
                <div className={`card-inner ${card.type}-card`}>
                  <div className="card-content">
                    {card.type === 'description' ? (
                      <>
                        <h3 className="card-title">{card.content}</h3>
                        <p className="card-description">{card.description}</p>
                      </>
                    ) : (
                      <div className="card-image-container">
                        <div className="mystery-icon">
                          <img href='memoramaback.png'/>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="mystery-icon">
                  <img src='memoramaback.png'/>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div>
          <button
            onClick={resetGame}
            className="reset-button"
          >
            Reiniciar
          </button>
        </div>
      </div>
    </Ejemplo>
  );
};

export default Memorama;

const MedalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(128, 128, 128, 0.6);  // Gris transparente
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  .modal-content {
    position: relative;
    background-color: white;
    padding: 2rem;
    border-radius: 1rem;
    text-align: center;
    max-width: 80%;
    width: 500px;
    animation: ${medalAnimation} 0.8s ease-out;
    box-shadow: 0 10px 25px rgba(0,0,0,0.2);
  }

  h2 {
    color: #008dda;
    margin-bottom: 1rem;
    font-size: 2.5rem;
  }

  p {
    color: #4a5568;
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
  }

  button {
    background-color: #008dda;
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 50px;
    font-size: 1.2rem;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #009dda;
    }
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 2rem;
  color: #008dda;
  cursor: pointer;
  padding: 0;
  line-height: 1;
  transition: color 0.3s ease;

  &:hover {
    color: #ff0000;
  }
`;

const MedalIcon = styled.div`
  font-size: 10rem;
  margin-bottom: 1rem;
  text-shadow: 0 4px 6px rgba(0,0,0,0.1);
`;

const Ejemplo = styled.div`
  * {
    font-family: 'League Spartan', sans-serif;
    background-color: #f7eedd;  
}
h1 {
  font-size: 7vh;
  color: #008dda;
  margin: 0 ;
  text-align: center;
}
p {
  font-size: 3vh;
  color: black;
  text-align: center;
  margin-top: 0;
}
.game-wrapper {
  width: 60vw;
  padding: 0;
  margin: 0 20vw;
  height: 94vh;
}

.game-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  width:100%;
}
.game-grid h3{
background-color: none;
}

@media (min-width: 768px) {
  .game-grid {
  grid-template-columns: 19% 19% 19% 19% 19%;
  gap: 1%;
  width:100%;
  }
}

.reset-button {
  margin: 0 25%;
  width: 50%;
  background-color: #008dda;
  border: 0;
  margin-top: 5%;
  margin-bottom: 10px;
  padding: 5%;
  color: #ace2e1;
  font-size: 1.3rem;
  font-family: 'League Spartan', sans-serif;
  border-radius: 150px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: transform 0.5s ease, margin-left 0.5s ease;
}

button:hover {
  background-color: #009dda;
  color: #fff;
}


.game-card {
    position: relative;
    aspect-ratio: 1 / 1;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    perspective: 1000px;
    transform-style: preserve-3d;
  }

  .game-card.hidden {
    background-color: #7c97cb !important;
    transition: transform 0.5s;

  }

  .game-card.hidden:hover {
    transform: translateY(-0.25rem) rotateX(10deg);
  }

  .game-card.revealed {
    position: relative;
    border-radius: 50px;
    aspect-ratio: 1 / 1;
    cursor: pointer;
    border-radius: 0.75rem;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    perspective: 1000px;
    animation: ${flipAnimation} 0.6s ease-in-out;
  }

  .game-card.revealed.matched {
    animation: none;
    transition: transform 0.3s ease;
  }

  .card-inner.description-card {
    border-radius: 50px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .card-inner.image-card {
    background-color: #ace2e1; /* Light teal for description cards */
    border-radius: 50px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

.card-content {
  width: 100%;
  background-color: #ace2e1; /* Light teal for description cards */
    border-radius: 50px;
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
}

.mystery-icon img {
  width: 80%;
  align-items: middle;
  padding: 10% 10%;
  background-color:#7c97cb;
  border-radius: 50px;
}
.back-to-games{
  width: 15%;
  background-color: #008dda;
  border: 0;
  margin-top: 20px;
  padding: 2%;
  color: #ace2e1;
  font-size: 1.3rem;
  font-family: 'League Spartan', sans-serif;
  border-radius: 150px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: transform 0.5s ease, margin-left 0.5s ease;
}
`;