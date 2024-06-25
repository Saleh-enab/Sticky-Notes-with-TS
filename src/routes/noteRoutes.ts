import express from "express";
import controller from "../controllers/noteControllers"

const router = express.Router();


router.get('/notes', controller.all_notes)

router.get('/about', controller.about_notes)

router.get('/add', controller.notes_add_get)

router.get('/notes/:id', controller.note_info)

router.post('/notes', controller.notes_add_post)

router.delete('/notes/:id', controller.delete_note)

export = router