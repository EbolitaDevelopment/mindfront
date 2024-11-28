import React, { useState, useEffect } from 'react';

const Juegos = () => {
  // Datos de las cartas - Asegúrate de que las rutas de las imágenes sean correctas
  const initialCards = [
    { 
      id: 1, 
      content: "HABLAR EN PÚBLICO",
      imgSrc: "/api/placeholder/120/120",
      description: "Miedo a hablar en público" 
    },
    { 
      id: 2, 
      content: "MIEDO A NUEVO CONTACTO",
      imgSrc: "/api/placeholder/120/120",
      description: "Temor al contacto social" 
    },
    { 
      id: 3, 
      content: "BAJA AUTOESTIMA",
      imgSrc: "/api/placeholder/120/120",
      description: "Suele rehuir el contacto social" 
    },
    { 
      id: 4, 
      content: "INTERACCIONES",
      imgSrc: "/api/placeholder/120/120",
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
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-3xl font-bold text-orange-400">AFECCIONES</h2>
              <p className="text-sm text-gray-600">Intentos: {moves}</p>
            </div>
            <button
              onClick={resetGame}
              className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2"
            >
              <span>🔄</span> Reiniciar
            </button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {gameCards.map((card) => (
              <div
                key={card.id}
                onClick={() => handleCardClick(card.id)}
                className={`
                  relative aspect-square cursor-pointer rounded-xl
                  transition-all duration-300 transform
                  ${(flippedCards.includes(card.id) || matchedPairs.includes(card.id)) 
                    ? 'bg-blue-50 border-2 border-blue-200' 
                    : 'bg-orange-300 hover:shadow-lg hover:-translate-y-1'}
                `}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                  {(flippedCards.includes(card.id) || matchedPairs.includes(card.id)) ? (
                    <>
                      <div className="w-20 h-20 mb-3 rounded-lg overflow-hidden shadow-md">
                        <img 
                          src={card.imgSrc} 
                          alt={card.content}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-sm font-bold text-center mb-1">
                        {card.content}
                      </h3>
                      <p className="text-xs text-gray-600 text-center">
                        {card.description}
                      </p>
                    </>
                  ) : (
                    <div className="text-6xl text-orange-500">❓</div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {gameWon && (
            <div className="mt-6 p-4 bg-green-100 border border-green-200 text-green-800 rounded-lg text-center">
              <h3 className="text-lg font-bold mb-1">¡Felicitaciones! 🎉</h3>
              <p>Has completado el memorama en {moves} intentos.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Juegos;