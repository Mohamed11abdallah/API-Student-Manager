
import express from 'express';
import cors from 'cors';

// Importation des routes
import studentRoutes from './src/routes/studentRoutes.js';
import moduleRoutes from './src/routes/moduleRoutes.js';
import registrationRoutes from './src/routes/registrationRoutes.js';
import paymentRoutes from './src/routes/paymentRoutes.js';

const app = express();

// Middleware
app.use(express.json());

// Configuration CORS
const corsOptions = {
  origin: '*',
  methods: 'GET,POST,PUT,DELETE',
};
app.use(cors(corsOptions));

// Déclaration des routes
app.use('/api/students', studentRoutes);       // Routes pour les étudiants
app.use('/api/modules', moduleRoutes);         // Routes pour les modules
app.use('/api/registrations', registrationRoutes); // Routes pour les inscriptions
app.use('/api/payments', paymentRoutes);       // Routes pour les paiements

// Démarrer le serveur
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
