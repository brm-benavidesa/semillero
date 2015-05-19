// Esperando que cargue cordova
document.addEventListener("deviceready", onDeviceReady, false);
// Cordova esta listo is ready
function onDeviceReady() {
  var db = window.openDatabase("sincronizacion", "1.0", "Base local para los datos", 200000);
  db.transaction(populateDB, errorCB, successCB);
}
// Populate the database 
function populateDB(tx) {
  /*tx.executeSql('DROP TABLE IF EXISTS clima');
  tx.executeSql('DROP TABLE IF EXISTS hitosciudad');
  tx.executeSql('DROP TABLE IF EXISTS rutas');*/
  tx.executeSql('CREATE TABLE IF NOT EXISTS clima (id INTEGER PRIMARY KEY AUTOINCREMENT,usuario CHAR(100) NOT NULL,lugar CHAR(200) NOT NULL,clima CHAR(250) NOT NULL)');
  tx.executeSql('CREATE TABLE IF NOT EXISTS hitosciudad (id INTEGER PRIMARY KEY AUTOINCREMENT,usuario CHAR(100) NOT NULL,hito CHAR(100) NOT NULL,descripcion CHAR(250) NOT NULL)');
  tx.executeSql('CREATE TABLE IF NOT EXISTS rutas (id INTEGER PRIMARY KEY AUTOINCREMENT,usuario CHAR(100) NOT NULL,ruta CHAR(200) NOT NULL,descripcion CHAR(250) NOT NULL)');
  //tx.executeSql('INSERT INTO clima (usuario,lugar,clima) VALUES ("andresx","suba-gaitana","soleado")');
  //here you can do  multiple sql statements.
 /* tx.executeSql('SELECT * FROM clima', [], function (tx, results) {
    var len = results.rows.length, i;
    msg = "<p>Found rows: " + len + "</p>";
    document.querySelector('#status').innerHTML += msg;
    for (i = 0; i < len; i++) {
      alert(results.rows.item(i).id + "\n" + results.rows.item(i).lugar);
    }
  }, null);*/
}
// Error en la coneccion 
function errorCB(err) {
  alert("Error processing SQL: " + err.code);
}
// Coneccion exitosa
function successCB() {
  alert("success!");
}
function insert() {
  var db = window.openDatabase("sincronizacion", "1.0", "Base local para los datos", 200000);
  db.transaction(insertClima, errorCB, successCB);
}
function consutar() {
  var db = window.openDatabase("sincronizacion", "1.0", "Base local para los datos", 200000);
  db.transaction(consultaClima, errorCB, successCB);
}
function insertClima(tx) {
  //INSERT INTO clima (usuario,lugar,clima) VALUES ("andresx","suba-gaitana","soleado")
  var lugar = document.getElementById("lugar").value;
  var clima = document.getElementById("clima").value;
  var user = "thisPhone";
  tx.executeSql('INSERT INTO clima (usuario,lugar,clima) VALUES ("'+user+ '","'+lugar+'","'+clima+'")');
}
function consultaClima(tx){
    tx.executeSql('SELECT * FROM clima', [], function (tx, results) {
    var len = results.rows.length, i;
    for (i = 0; i < len; i++) {
      alert(results.rows.item(i).id + "\n" + results.rows.item(i).lugar);
    }
  }, null);
}