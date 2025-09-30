import React, { useEffect, useState } from 'react';
import { api } from '../api';

function Students() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [rollNumber, setRollNumber] = useState('');

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    const res = await api.getStudents();
    setStudents(res.data);
  };

  const addStudent = async (e) => {
    e.preventDefault();
    await api.addStudent({ name, email, roll_number: rollNumber });
    setName('');
    setEmail('');
    setRollNumber('');
    fetchStudents();
  };

  const deleteStudent = async (id) => {
    await api.deleteStudent(id);
    fetchStudents();
  };

  return (
    <div>
      <h2>Students</h2>
      <form onSubmit={addStudent} style={{ marginBottom: '20px' }}>
        <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} required />
        <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
        <input placeholder="Roll Number" value={rollNumber} onChange={e => setRollNumber(e.target.value)} required />
        <button type="submit">Add Student</button>
      </form>

      <table border="1" cellPadding="10">
        <thead>
          <tr><th>Name</th><th>Email</th><th>Roll Number</th><th>Actions</th></tr>
        </thead>
        <tbody>
          {students.map(s => (
            <tr key={s.id}>
              <td>{s.name}</td>
              <td>{s.email}</td>
              <td>{s.roll_number}</td>
              <td>
                <button onClick={() => deleteStudent(s.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Students;
