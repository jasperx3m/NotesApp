const fs = require("fs");

export default class Utils {
    constructor(){

    }

    private parseJson(text:string){return JSON.parse(text);}
	private parseJsonFile(filePath:string,format:string='utf8'){return this.parseJson(fs.readFileSync(filePath,format));}
}