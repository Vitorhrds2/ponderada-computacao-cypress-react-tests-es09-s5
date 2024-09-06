// App.tsx
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Calculadora from './Calculadora';
import ToDo from './ToDo';

function App() {
  return (
    <Router>
      <nav>
            <Link to="/calculadora">Calculadora</Link>
            <br />
            <Link to="/todo">To-Do List</Link>
      </nav>
      
      <Routes>
        <Route path="/calculadora" element={<Calculadora />} />
        <Route path="/todo" element={<ToDo />} />
      </Routes>
    </Router>
  );
}

export default App;
