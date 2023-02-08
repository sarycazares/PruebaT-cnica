var mysql = require('mysql2');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const {insert, update} = require("./Controllers/usuarioController.js")

app.use(express.json());


var conexion = mysql.createConnection({
 host: 'localhost',
 database: 'pruebaBase',
 user: 'root',
 password: 'root'
});



conexion.connect(function(error){

    
    if(error){
        throw error;
    } else {
        console.log('Se Realizo La Conexion')
    }


})

conexion.query('Select * from usuarios',function(error, results,fields){

    if(error){
        throw error;
    }

    update(conexion,{idUsuario: '3', nombre:'Sebastian',apellido:'Torres', usuario:'miles', contrasena:'1234', nivel:'2'}, (result) =>{
        res.json(result);

    });


    results.forEach(result=>{
        console.log(result);
    })

})



app.use(express.json());

app.get("/", (req,res)=>{
    res.send("Prueba");
});


app.get("/insert", (req,res)=>{
    
    insert(conexion,{idUsuario: '3', nombre:'Bryan',apellido:'Nava', usuario:'milestom', contrasena:'123', nivel:'1'}, (result) =>{
        res.json(result);
    });

});

app.get("/update", (req,res)=>{
    
    update(conexion,{idUsuario: '3', nombre:'Sebastian',apellido:'Torres', usuario:'miles', contrasena:'1234', nivel:'2'}, (result) =>{
        res.json(result);
    });

});


//conexion.end();