import Note from "../models/notes"
import { Request, Response } from "express"

const all_notes = (req: Request, res: Response) => {
    Note.find()
        .then((notes) => {
            res.render('notes', { title: "All Notes", notes })
        })
        .catch((err) => {
            console.log(err)
            console.log(err)
        })
}

const about_notes = (req: Request, res: Response) => {
    res.render('about', { title: "About the app" })
}

const notes_add_get = (req: Request, res: Response) => {
    res.render('add', { title: "Add new note" })
}

const notes_add_post = (req: Request, res: Response) => {
    const note = new Note(req.body)
    note.save()
        .then(() => {
            res.redirect('/notes')
            console.log("Note added successfully.")
        })
        .catch((err) => {
            console.log(err)
        })
}


const note_info = (req: Request, res: Response) => {
    const id = req.params.id;
    Note.findById(id)
        .then((result) => {
            res.render('note_info', { title: "Note Info", note: result })
        })
        .catch((err) => {
            console.log(err)
        })
}


const delete_note = (req: Request, res: Response) => {
    const id = req.params.id
    Note.findByIdAndDelete(id)
        .then(() => {
            res.json({ redirect: '/notes' })
            console.log('Note deleted successfully.')
        })
        .catch((err) => {
            console.log(err)
        })
}



export = { all_notes, about_notes, notes_add_get, notes_add_post, delete_note, note_info }