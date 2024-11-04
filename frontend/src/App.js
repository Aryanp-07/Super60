import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StudentList from './components/StudentList';
import StudentProfile from './components/StudentProfile';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<StudentList />} />
          <Route path="/student/:id" element={<StudentProfile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
