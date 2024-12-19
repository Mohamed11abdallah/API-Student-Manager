// src/routes/studentRoutes.js
import express from 'express';
import { getAllStudents, getStudentById, createStudent, updateStudent, deleteStudent } from '../controllers/studentController.js';

const router = express.Router();

router.get('/', getAllStudents);          // Récupérer tous les étudiants
router.get('/:id', getStudentById);       // Récupérer un étudiant par ID
router.post('/', createStudent);          // Créer un nouvel étudiant
router.put('/:id', updateStudent);        // Mettre à jour un étudiant par ID
router.delete('/:id', deleteStudent);     // Supprimer un étudiant par ID

export default router;
