
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
var mysql = require('mysql2');


let idnombre
let nombre
let apellidos
let usuarios
let contraseña
let niveles
let idniveles

app.use(express.json());

app.get("/", (req,res)=>{
    res.send("Prueba");
});


app.get("/insert", (req,res)=>{
    
    insert(cone, results =>{

    });

});