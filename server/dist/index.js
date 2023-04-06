"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
// import dotenv from 'dotenv';
//   //dotenv package is used to read environment variables from the .env file.create it in the root of node.js app, then create the environment variable for port=8000
// dotenv.config();
// const app=express();
// const port=process.env.port || 3000;   //port environment variable
// // app.get('/',(req:Request,res:Response)=>{
// //     res.send('Express and Typescript server in Angular Application')
// // });
// app.use(todoRouter);
// app.listen(port,()=>{
//     console.log(`Server is running at localhost:${port}`)
// });
const app = (0, express_1.default)();
var corsOptions = {
    origin: "http://localhost:8081"
};
app.use((0, cors_1.default)(corsOptions));
// parse requests of content-type - application/json
app.use(express_1.default.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express_1.default.urlencoded({ extended: true }));
// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to  application." });
});
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
//@types namespace consist that typescript type definitions for use directly in node.js and other Javascript projects, so 
//you don't need to define these types from scratch. To add these types or the declaration 
//files related to a particular library or a module,you have to look for the packages that start with @types namespace
