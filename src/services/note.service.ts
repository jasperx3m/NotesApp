import { Express} from "express";
import { Note } from "../models/notes.model";
import NotesController from "../controller/notes.controller";

export default class NoteService {
    notesPath = "notes";
   

    constructor(private app: Express, private controller: NotesController){
        console.log("Note Service Initiated");

        app.get(`/${this.notesPath}`, (req, res)=>{
            try{
                let notes = this.controller.getNotes();
                res.status(200).json({status: "success", code: 200, data: notes})
            }catch(e: any){
                res.status(400).json({status: "failed", code: 400, message: e.message||"Something went wrong", data: null})
            }
        })

        app.get(`/${this.notesPath}/:id`, (req, res)=>{
            try{
                let id = req.params?.id;
                let note = this.controller.getNoteById(id);
                if (!note) {throw new Error(`Note with id ${id} was not found`)}
                res.status(200).json({status: "success", code: 200, data: note})
            }catch(e: any){
                res.status(400).json({status: "failed", code: 400, message: e.message||"Something went wrong", data: null})
            }
        })

        app.post(`/${this.notesPath}`, (req, res)=>{
            try{
                let data = req.body;
                if (!data?.title && !data?.body) {throw new Error("Title and Body is required")};
                if (!data?.title) {throw new Error("Title is required")};
                if (!data?.body) {throw new Error("Body is required")};

                let note = this.controller.addNote(data.title, data.body);

                res.status(200).json({status: "success", code: 200, data: note})
            }catch(e: any){
                res.status(400).json({status: "failed", code: 400, message: e.message||"Something went wrong", data: null})
            }
        })

        app.put(`/${this.notesPath}/:id`, (req, res)=>{
            try{
                let data = req.body;
                let id = req.params.id;
                
                if (!id) {throw new Error("Id is required")};
                if (!data?.title && !data?.body) {throw new Error("Title and Body is required")};
                if (!data?.title) {throw new Error("Title is required")};
                if (!data?.body) {throw new Error("Body is required")};

                let note = this.controller.updateNote(id, data.title, data.body);

                if (!note) {throw new Error(`Note with id ${id} was not found`)}

                res.status(200).json({status: "success", code: 200, data: note})
            }catch(e: any){
                res.status(400).json({status: "failed", code: 400, message: e.message||"Something went wrong", data: null})
            }
        })

        app.delete(`/${this.notesPath}/:id`, (req, res)=>{
            try{
                let id:any = req.params?.id;
                
                if (!id) {throw new Error("Id is required")};

                let note = this.controller.deleteNote(id);
                if (!note) {throw new Error(`Note with id ${id} was not found`)}
                res.status(200).json({status: "success", code: 200, data: note})
            }catch(e: any){
                res.status(400).json({status: "failed", code: 400, message: e.message||"Something went wrong", data: null})
            }
        })
    }
}