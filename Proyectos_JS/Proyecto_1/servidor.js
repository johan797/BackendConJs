//Importe los módulos requeridos
const express = require("express");
const app = express();
//const puerto = 5000;
const puerto = process.env.PORT|| 5000;

//linea para configurar el Motor de plantillas en express
app.set('view engine', 'ejs');
//indica donde estan nuestras plantillas o views
app.set('views', __dirname + '/views');
//app.use(express.urlencoded)
app.use(express.static(__dirname + "/public"));
//Middlewares
app.use(express.urlencoded({ extended: false }));
/*app.set('views','/app/views');
app.use(express.static("/app/public"));*/
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const json_pros = fs.readFileSync('p.json', 'utf-8');
let produc = JSON.parse(json_pros);



//Atención de la solicitud
app.get('/', (req, res) => {
    //el render toma el nombre del archivo, y despues le enviamos datos en este caso variable. 
    res.render("index", {})
});


app.get('/:producto1', (req, res) => {
    //el render toma el nombre del archivo, y despues le enviamos datos en este caso variable. 
    res.render("producto1", { produc })

});

app.post('/', (req, res) => {
    const { nombre, valor, descripcion, imagen } = req.body;

    if (!nombre || !valor || !descripcion || !imagen) {
        res.status(400).send("Entries must have a title and body");
        return;
    }

    var newprod = {
       id: uuidv4(), nombre, valor, descripcion, imagen
    };

    produc.push(newprod);

    const json_products = JSON.stringify(produc);
    fs.writeFileSync('p.json', json_products, 'utf-8');

    res.redirect('/productos1');

});

app.get('/delete/:id', (req,res)=>{
    produc= produc.filter(produ=>produ.id !=req.params.id);
    const json_products = JSON.stringify(produc);
    fs.writeFileSync('p.json', json_products, 'utf-8');
    res.redirect('/productos1');
});

//Oyente
app.listen(puerto, () => {
    console.log("Ejecutando servidor " + puerto);
    
});


/* http://localhost:5000/  */ //no abre con https
/* https://git.heroku.com/storetelematics.git */ 