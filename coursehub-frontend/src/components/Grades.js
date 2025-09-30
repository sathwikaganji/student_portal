import React, { useEffect, useState } from 'react';
import { api } from '../api';

function Grades() {
  const [grades, setGrades] = useState([]);
  const [students, setStudents] = useState([]);
  const [courses, setCourses] = useState([]);
  const [studentId, setStudentId] = useState('');
  const [courseId, setCourseId] = useState('');
  const [grade, setGrade] = useState('');

  useEffect(() => {
    fetchGrades();
    fetchStudents();
    fetchCourses();
  }, []);

  const fetchGrades = async () => {
    const res = await api.getGrades();
    setGrades(res.data);
  };

  const fetchStudents = async () => {
    const res = await api.getStudents();
    setStudents(res.data);
  };

  const fetchCourses = async () => {
    const res = await api.getCourses();
    setCourses(res.data);
  };

  const addGrade = async (e) => {
    e.preventDefault();
    await api.addGrade({ student: studentId, course: courseId, grade });
    setStudentId('');
    setCourseId('');
    setGrade('');
    fetchGrades();
  };

  const deleteGrade = async (id) => {
    await api.deleteGrade(id);
    fetchGrades();
  };

  return (
    <div>
      <h2>Grades</h2>
      <form onSubmit={addGrade} style={{ marginBottom: '20px' }}>
        <select value={studentId} onChange={e => setStudentId(e.target.value)} required>
          <option value="">Select Student</option>
          {students.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
        </select>
        <select value={courseId} onChange={e => setCourseId(e.target.value)} required>
          <option value="">Select Course</option>
          {courses.map(c => <option key={c.id} value={c.id}>{c.title}</option>)}
        </select>
        <input placeholder="Grade" value={grade} onChange={e => setGrade(e.target.value)} required />
        <button type="submit">Add Grade</button>
      </form>

      <table border="1" cellPadding="10">
        <thead>
          <tr><th>Student</th><th>Course</th><th>Grade</th><th>Actions</th></tr>
        </thead>
        <tbody>
          {grades.map(g => (
            <tr key={g.id}>
              <td>{g.student}</td>
              <td>{g.course}</td>
              <td>{g.grade}</td>
              <td>
                <button onClick={() => deleteGrade(g.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Grades;
