import App from "./src/app";
import NotesController from "./src/controller/notes.controller";
import NoteService from "./src/services/note.service";

const config = require("./config/server-config");
const app = new App(config.port).initServer();
const notesController = new NotesController();
const noteService = new NoteService(app, notesController);