import './App.css';
import Introduccion from './components/Introduccion';
import Nav from'./components/Nav';

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        <Nav />
      </header>
      <body className='App-body'>
      <Introduccion/>
      </body>
      
    </div>
    
  );
}

export default App;
