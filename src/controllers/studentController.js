import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// Fonction pour lister tous les étudiants
export const getAllStudents = async (req, res) => {
  try {
    const students = await prisma.student.findMany(); // Récupère tous les apprenants
    res.status(200).json(students); // Renvoie les apprenants sous format JSON
  } catch (error) {
    console.error('Erreur lors de la récupération des apprenants :', error);
    res.status(500).json({
      error: 'Une erreur est survenue lors de la récupération des apprenants.',
    });
  }
};

// Fonction pour récupérer un étudiant spécifique
export const getStudentById = async (req, res) => {
  const { id } = req.params;

  if (!id || isNaN(id)) {
    return res.status(400).json({ error: "L'ID de l'étudiant est invalide." });
  }

  try {
    const student = await prisma.student.findUnique({
      where: { id: parseInt(id) },
    });

    if (!student) {
      return res.status(404).json({ error: 'Apprenant non trouvé.' });
    }

    res.status(200).json(student);
  } catch (error) {
    console.error("Erreur lors de la récupération de l'apprenant :", error);
    res.status(500).json({
      error: "Une erreur est survenue lors de la récupération de l'apprenant.",
    });
  }
};

// Fonction pour créer un nouvel étudiant
export const createStudent = async (req, res) => {
  const { fullName, phoneNumber, email, address, tutor, status } = req.body;

  // Vérification des champs obligatoires
  if (!fullName || !phoneNumber || !email || !address || !tutor || !status) {
    return res.status(400).json({ error: 'Tous les champs sont requis.' });
  }

  // Validation du format de l'email
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "L'email fourni est invalide." });
  }

  // Validation du numéro de téléphone (uniquement des chiffres)
  const phoneRegex = /^[0-9]+$/; // Vérifie si le numéro est composé uniquement de chiffres
  if (!phoneRegex.test(phoneNumber)) {
    return res.status(400).json({
      error: 'Le numéro de téléphone doit contenir uniquement des chiffres.',
    });
  }

  try {
    const newStudent = await prisma.student.create({
      data: {
        fullName,
        phoneNumber,
        email,
        address,
        tutor,
        status,
      },
    });

    res.status(201).json(newStudent);
  } catch (error) {
    console.error("Erreur lors de la création de l'apprenant :", error);
    res.status(500).json({
      error: "Une erreur est survenue lors de la création de l'apprenant.",
    });
  }
};

// Fonction pour mettre à jour un étudiant
export const updateStudent = async (req, res) => {
  const { id } = req.params;
  const { fullName, phoneNumber, email, address, tutor, status } = req.body;

  // Vérification de l'ID
  if (!id || isNaN(id)) {
    return res.status(400).json({ error: "L'ID de l'étudiant est invalide." });
  }

  // Vérification des champs obligatoires
  if (!fullName || !phoneNumber || !email || !address || !tutor || !status) {
    return res.status(400).json({ error: 'Tous les champs sont requis.' });
  }

  // Validation du format de l'email
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "L'email fourni est invalide." });
  }

  // Validation du numéro de téléphone (uniquement des chiffres)
  const phoneRegex = /^[0-9]+$/; // Vérifie si le numéro est composé uniquement de chiffres
  if (!phoneRegex.test(phoneNumber)) {
    return res.status(400).json({
      error: 'Le numéro de téléphone doit contenir uniquement des chiffres.',
    });
  }

  try {
    const updatedStudent = await prisma.student.update({
      where: { id: parseInt(id) },
      data: {
        fullName,
        phoneNumber,
        email,
        address,
        tutor,
        status,
      },
    });

    res.status(200).json(updatedStudent);
  } catch (error) {
    console.error("Erreur lors de la mise à jour de l'apprenant :", error);
    res.status(500).json({
      error: "Une erreur est survenue lors de la mise à jour de l'apprenant.",
    });
  }
};

// Fonction pour supprimer un étudiant
export const deleteStudent = async (req, res) => {
  const { id } = req.params;

  // Vérification de l'ID
  if (!id || isNaN(id)) {
    return res.status(400).json({ error: "L'ID de l'étudiant est invalide." });
  }

  try {
    const deletedStudent = await prisma.student.delete({
      where: { id: parseInt(id) },
    });

    res
      .status(200)
      .json({ message: 'Apprenant supprimé avec succès.', deletedStudent });
  } catch (error) {
    console.error("Erreur lors de la suppression de l'apprenant :", error);
    res.status(500).json({
      error: "Une erreur est survenue lors de la suppression de l'apprenant.",
    });
  }
};
