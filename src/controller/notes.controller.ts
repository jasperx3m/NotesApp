import { Note } from "../models/notes.model";
import {v4 as uuidv4} from 'uuid';

export default class NotesController{
    private notesArray: Note[] = [
        {
            id: uuidv4(), 
            title: "Note Title 1",
            body: "This is Note 1 body",
            createdAt: new Date(),
            updatedAt: new Date()
        }
    ]
    constructor(){

    }

    getNotes(): Note[]{
        return this.notesArray;
    }

    getNoteById(id: any): Note | undefined{
        return this.notesArray.find(x => x.id == id);
    }

    addNote(title: string, body: string): Note{
        let note : Note = {
            id: uuidv4(),
            title,
            body,
            createdAt: new Date(),
            updatedAt: new Date()
        }
        this.notesArray.push(note);
        return note;
    }

    updateNote(id: string, title: string, body: string): Note | undefined{
        let note = this.getNoteById(id);
        if (note){
            note.title = title;
            note.body = body;
            note.updatedAt = new Date();
            let index = this.notesArray.indexOf(note);
            this.notesArray[index]=note;
        }
        return note;
    }

    deleteNote(id: string): Note | undefined{
        let note = this.getNoteById(id);
        if (note){
            let index = this.notesArray.indexOf(note);
            this.notesArray.splice(index, 1);
        }
        return note;
    }
}