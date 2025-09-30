import React, { useEffect, useState } from 'react';
import { api } from '../api';

function Courses() {
  const [courses, setCourses] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [credits, setCredits] = useState(3);

  useEffect(() => { fetchCourses(); }, []);

  const fetchCourses = async () => {
    const res = await api.getCourses();
    setCourses(res.data);
  };

  const addCourse = async (e) => {
    e.preventDefault();
    await api.addCourse({ title, description, credits });
    setTitle('');
    setDescription('');
    setCredits(3);
    fetchCourses();
  };

  const deleteCourse = async (id) => {
    await api.deleteCourse(id);
    fetchCourses();
  };

  return (
    <div>
      <h2>Courses</h2>
      <form onSubmit={addCourse} style={{ marginBottom: '20px' }}>
        <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} required />
        <input placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
        <input type="number" placeholder="Credits" value={credits} onChange={e => setCredits(e.target.value)} required />
        <button type="submit">Add Course</button>
      </form>

      <table border="1" cellPadding="10">
        <thead>
          <tr><th>Title</th><th>Description</th><th>Credits</th><th>Actions</th></tr>
        </thead>
        <tbody>
          {courses.map(c => (
            <tr key={c.id}>
              <td>{c.title}</td>
              <td>{c.description}</td>
              <td>{c.credits}</td>
              <td>
                <button onClick={() => deleteCourse(c.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Courses;
