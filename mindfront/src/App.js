import './App.css';
import Introduccion from './components/Introduccion';
import Nav from'./components/Nav';
import { BrowserRouter, Router, Route, Routes} from 'react-router-dom';

function App() {
  return (

    
    <BrowserRouter>
      <Router>
        <Routes>
          <div className="App-header">
            <Nav />
          </div>
          <Route>
          <body className='App-body'>
            <Introduccion/>
          </body>
          </Route>
        </Routes>
      </Router>
    </BrowserRouter>
    
    
  );
}

export default App;
