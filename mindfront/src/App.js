import './App.css';
import Introduccion from './components/Introduccion';
import Nav from'./components/Nav';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (

    
    <div className="App">
      <Router>
        <Routes>
          <div className="App-header">
            <Nav />
          </div>
          <body className='App-body'>
            <Introduccion/>
          </body>
        </Routes>
      </Router>
    </div>
    
    
  );
}

export default App;
