const mysql = require("mysql");
const con = mysql.createConnection({
  host: "localhost",
  user: "robot",
  password: "1234",
  database: "uaeh",
});

const gatDataEvent = ({ req, res }) => {
  con.query("select * from evento", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    res.json(result);
  });
};

const postDataEvent = ({ req, res }) => {
  console.log(req.body);
  var postData = req.body
  const nombre = postData.nombre
  const fechaI = postData.fechaInicio
  const fechaF = postData.fechaFin
  const ob = postData.observaciones
  const querySql = `insert into Evento (nombre,fechaInicio,fechaTermino,observaciones)
  values ('${nombre}', '${fechaI}', '${fechaF}', '${ob}')`
  console.log(querySql)
  con.query(querySql, function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    res.status(201).json(result);
  });
};

module.exports = { gatDataEvent, postDataEvent };
