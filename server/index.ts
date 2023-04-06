import express, { Express, Request, Response } from 'express';
import {todoRouter} from './routes/todo';
import cors from 'cors';
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



const app = express();

var corsOptions = {           //Cors provides Express middleware to enable CORS with various options
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

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