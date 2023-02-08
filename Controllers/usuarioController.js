var mysql = require('mysql2');

function insert(connection, data, callback){
    let insertQuery = "INSERT INTO usuarios(idUsuario,Nombre,Apellidos,Usuario,Contraseña,Niveles) Values(?,?,?,?,?,?)"
    let query = mysql.format(insertQuery,[data.idUsuario, data.Nombre,data.Apellidos, data.Usuario, data.Contraseña, data.Niveles]);
    connection.query(query, function(error, result){
        if(error){
            throw error;
        } else {
            console.log('Se Agrego Correctamente Usuario')
            callback(result);
        }
    })
}

function update(connection, data, callback){
    let updateQuery = "UPDATE usuarios SET Nombre = ? WHERE idUsuario = ?";
    let query = mysql.format(updateQuery,[data.idUsuario, data.Nombre,data.Apellidos, data.Usuario, data.Contraseña, data.Niveles]);
    connection.query(query, function(error, result){
        if(error){
            throw error;
        } else {
            console.log('Se Modifico Correctamente Usuario')
            callback(result);
        }
    })
}

function remove(connection, data, callback){
    let removeQuery = "DELETE usuarios SET Nombre = ? WHERE idUsuario = ?";
    let query = mysql.format(removeQuery,[data.idUsuario]);
    connection.query(query, function(error, result){
        if(error){
            throw error;
        } else {
            console.log('Se Elimino Correctamente Usuario')
            callback(result);
        }
    })
}

module.exports = {insert, update};