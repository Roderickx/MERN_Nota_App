const notesCtrl = {}

const Note = require('../models/Note');





notesCtrl.getNotes = async (req, res) => {
    const  notes = await Note.find();
    res.json(notes);
}

notesCtrl.createNote = async (req, res) => {
    const {title, content, date, author} = req.body;
    const newNote = new Note({
        title: title,
        content: content,
        date: date,
        author, author
    })
    await newNote.save();
    
    res.json({mesage: 'Note saved'})
}
notesCtrl.updateNote = async (req, res) => {
    const { title, content, author} = req.body;
    await Note.findOneAndUpdate(req.params.id, {
        title,
        author,
        content
    });
    res.json({mesage: 'Note update'})
}

notesCtrl.getNote = async (req, res) => {
    const note = await Note.findById(req.params.id);
    res.json(note)
}

notesCtrl.deleteNote = async (req, res) => {
    await Note.findByIdAndDelete(req.params.id);
    res.json({mesage: 'note deleted'})
}

module.exports = notesCtrl;