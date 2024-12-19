// src/routes/moduleRoutes.js
import express from 'express';
import { getAllModules, getModuleById, createModule, updateModule, deleteModule } from '../controllers/moduleController.js';

const router = express.Router();

router.get('/', getAllModules);          // Récupérer tous les modules
router.get('/:id', getModuleById);       // Récupérer un module par ID
router.post('/', createModule);          // Créer un nouveau module
router.put('/:id', updateModule);        // Mettre à jour un module par ID
router.delete('/:id', deleteModule);     // Supprimer un module par ID

export default router;
