import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000/api/';

export const api = {
  // Students
  getStudents: () => axios.get(`${BASE_URL}students/`),
  addStudent: (data) => axios.post(`${BASE_URL}students/`, data),
  deleteStudent: (id) => axios.delete(`${BASE_URL}students/${id}/`),

  // Courses
  getCourses: () => axios.get(`${BASE_URL}courses/`),
  addCourse: (data) => axios.post(`${BASE_URL}courses/`, data),
  deleteCourse: (id) => axios.delete(`${BASE_URL}courses/${id}/`),

  // Assignments
  getAssignments: () => axios.get(`${BASE_URL}assignments/`),
  addAssignment: (data) => axios.post(`${BASE_URL}assignments/`, data),
  deleteAssignment: (id) => axios.delete(`${BASE_URL}assignments/${id}/`),

  // Grades
  getGrades: () => axios.get(`${BASE_URL}grades/`),
  addGrade: (data) => axios.post(`${BASE_URL}grades/`, data),
  deleteGrade: (id) => axios.delete(`${BASE_URL}grades/${id}/`),
};
