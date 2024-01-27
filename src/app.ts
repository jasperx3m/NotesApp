import express from "express";
import bodyParser from "body-parser";
import http from "http";


export default class App {
    static initServer() {
            throw new Error("Method not implemented.");
    }
    constructor(private port:number){
        
    }
    
    public initServer() {
        
        const app = express();
        app.use(bodyParser.json());

        const server = http.createServer(app);
        server.listen(this.port, () => { console.log(`Application is running on port ${this.port}`) });

        return app;
    }
}