import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Students from './components/Students';
import Courses from './components/Courses';
import Assignments from './components/Assignments';
import Grades from './components/Grades';

function App() {
  return (
    <Router>
      <div>
        <header style={{background: 'green', padding: '10px', color: 'white'}}>
          <h1>student portal</h1>
          <nav>
            <Link to="/students" style={{margin: '10px', color: 'white'}}>Students</Link>
            <Link to="/courses" style={{margin: '10px', color: 'white'}}>Courses</Link>
            <Link to="/assignments" style={{margin: '10px', color: 'white'}}>Assignments</Link>
            <Link to="/grades" style={{margin: '10px', color: 'white'}}>Grades</Link>
          </nav>
        </header>
        <main style={{padding: '20px'}}>
          <Routes>
            <Route path="/students" element={<Students />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/assignments" element={<Assignments />} />
            <Route path="/grades" element={<Grades />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
