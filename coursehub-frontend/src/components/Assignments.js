import React, { useEffect, useState } from 'react';
import { api } from '../api';

function Assignments() {
  const [assignments, setAssignments] = useState([]);
  const [courses, setCourses] = useState([]);
  const [title, setTitle] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [courseId, setCourseId] = useState('');

  useEffect(() => {
    fetchAssignments();
    fetchCourses();
  }, []);

  const fetchAssignments = async () => {
    const res = await api.getAssignments();
    setAssignments(res.data);
  };

  const fetchCourses = async () => {
    const res = await api.getCourses();
    setCourses(res.data);
  };

  const addAssignment = async (e) => {
    e.preventDefault();
    await api.addAssignment({ title, due_date: dueDate, course: courseId });
    setTitle('');
    setDueDate('');
    setCourseId('');
    fetchAssignments();
  };

  const deleteAssignment = async (id) => {
    await api.deleteAssignment(id);
    fetchAssignments();
  };

  return (
    <div>
      <h2>Assignments</h2>
      <form onSubmit={addAssignment} style={{ marginBottom: '20px' }}>
        <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} required />
        <input type="date" value={dueDate} onChange={e => setDueDate(e.target.value)} required />
        <select value={courseId} onChange={e => setCourseId(e.target.value)} required>
          <option value="">Select Course</option>
          {courses.map(c => <option key={c.id} value={c.id}>{c.title}</option>)}
        </select>
        <button type="submit">Add Assignment</button>
      </form>

      <table border="1" cellPadding="10">
        <thead>
          <tr><th>Title</th><th>Course</th><th>Due Date</th><th>Actions</th></tr>
        </thead>
        <tbody>
          {assignments.map(a => (
            <tr key={a.id}>
              <td>{a.title}</td>
              <td>{a.course}</td>
              <td>{a.due_date}</td>
              <td>
                <button onClick={() => deleteAssignment(a.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Assignments;
