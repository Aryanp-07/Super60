import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    async function fetchStudents() {
      const response = await fetch('http://localhost:5000/students');
      const data = await response.json();
      setStudents(data);
    }
    fetchStudents();
  }, []);

  return (
    <div>
      <h1>Student List</h1>
      <ul>
        {students.map(student => (
          <li key={student._id}>
            <Link to={`/student/${student._id}`}>{student.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
