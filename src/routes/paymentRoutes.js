// src/routes/paymentRoutes.js
import express from 'express';
import { getAllPayments, getPaymentById, createPayment, updatePayment, deletePayment } from '../controllers/paymentController.js';

const router = express.Router();

router.get('/', getAllPayments);          // Récupérer tous les paiements
router.get('/:id', getPaymentById);       // Récupérer un paiement par ID
router.post('/', createPayment);          // Créer un nouveau paiement
router.put('/:id', updatePayment);        // Mettre à jour un paiement par ID
router.delete('/:id', deletePayment);     // Supprimer un paiement par ID

export default router;
