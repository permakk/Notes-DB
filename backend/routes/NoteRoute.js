import express from "express";
import {
    getNotes, 
    getNoteById,
    createNote,
    updateNote,
    deleteNote
} from "../controllers/NoteController.js";

const router = express.Router();

router.get('/Notes', getNotes);
router.get('/Notes/:id', getNoteById);
router.post('/Notes', createNote);
router.patch('/Notes/:id', updateNote);
router.delete('/Notes/:id', deleteNote);

export default router;