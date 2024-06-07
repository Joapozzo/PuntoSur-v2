require('dotenv').config();

const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const session = require('express-session');
const app = express();
const port = 3001;

// Configurar cors
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '2511',
    database: 'gootpv'
});

db.connect(err => {
    if (err) {
        console.error('Error conectando a la base de datos:', err);
        return;
    }
    console.log('Conectado a la base de datos MySQL');
});

app.use(session({
    secret: process.env.SESSION_SECRET || 'mysecret', // Asegúrate de cambiar esto a una cadena segura
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Asegúrate de que esté en 'false' para desarrollo en HTTP
}));

// ARTICULOS HOME OFERTAS
app.get('/articulosOF', (req, res) => {
    const query = "SELECT CODIGO_BARRA, COD_INTERNO, COD_IVA, PRECIO_SIN_IVA_4, COSTO, porc_impint, COD_DPTO, PESABLE, STOCK, art_desc_vta FROM articulo WHERE art_desc_vta LIKE '%COCA COLA%' LIMIT 8";
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error ejecutando la consulta:', err);
            res.status(500).send('Error en el servidor');
            return;
        }
        res.json(results);
    });
});

// ARTICULOS HOME DESTACADOS
app.get('/articulosDEST', (req, res) => {
    const query = "SELECT CODIGO_BARRA, COD_INTERNO, COD_IVA, PRECIO_SIN_IVA_4, COSTO, porc_impint, COD_DPTO, PESABLE, STOCK, art_desc_vta FROM articulo WHERE art_desc_vta LIKE '%COCA COLA%' LIMIT 8";
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error ejecutando la consulta:', err);
            res.status(500).send('Error en el servidor');
            return;
        }
        res.json(results);
    });
});

// ARTICULOS PRINCIPALES
app.get('/productosMAIN', (req, res) => {
    const query = "SELECT CODIGO_BARRA, COD_INTERNO, COD_IVA, PRECIO_SIN_IVA_4, COSTO, porc_impint, COD_DPTO, PESABLE, STOCK, art_desc_vta FROM articulo LIMIT 16";
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error ejecutando la consulta:', err);
            res.status(500).send('Error en el servidor');
            return;
        }
        res.json(results);
    });
});




app.get('/articulos/:categoryId', (req, res) => {
    const categoryId = req.params.categoryId;
    const query = `
        SELECT CODIGO_BARRA, COD_INTERNO, COD_IVA, PRECIO_SIN_IVA_4, COSTO, porc_impint, COD_DPTO, PESABLE, STOCK, art_desc_vta
        FROM articulo
        WHERE COD_DPTO = ?;
    `;
    db.query(query, [categoryId], (err, results) => {
        if (err) {
            console.error('Error ejecutando la consulta:', err);
            res.status(500).send('Error en el servidor');
            return;
        }
        res.json(results);
    });
});

app.get('/buscar', (req, res) => {
    const searchTerm = req.query.q;
    const query = `
        SELECT CODIGO_BARRA, COD_INTERNO, COD_IVA, PRECIO_SIN_IVA_4, COSTO, porc_impint, COD_DPTO, PESABLE, STOCK, art_desc_vta
        FROM articulo
        WHERE art_desc_vta LIKE ?;
    `;
    db.query(query, [`%${searchTerm}%`], (err, results) => {
        if (err) {
            console.error('Error ejecutando la consulta:', err);
            res.status(500).send('Error en el servidor');
            return;
        }
        res.json(results);
    });
});



//CATEGORIAS SLIDER
app.get('/categorias', (req, res) => {
    const query = `
        SELECT id_clasif, NOM_CLASIF
        FROM clasif ORDER BY NOM_CLASIF ASC;
    `;
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error ejecutando la consulta:', err);
            res.status(500).send('Error en el servidor');
            return;
        }
        res.json(results);
    });
});




// ARTICULOS CHEKCOUT RELACIONADOS
app.get('/artCHECKOUT', (req, res) => {
    const query = "SELECT CODIGO_BARRA, COD_INTERNO, COD_IVA, PRECIO_SIN_IVA_4, COSTO, porc_impint, COD_DPTO, PESABLE, STOCK, art_desc_vta FROM articulo WHERE art_desc_vta LIKE '%COCA COLA%' LIMIT 4";
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error ejecutando la consulta:', err);
            res.status(500).send('Error en el servidor');
            return;
        }
        res.json(results);
    });
});





app.post('/cart', (req, res) => {
    const { name, quantity, total, price } = req.body;
    if (!req.session.cart) {
        req.session.cart = [];
    }
    req.session.cart.push({ name, quantity, total, price });
    console.log('Carrito actualizado:', req.session.cart); // Log para depuración
    res.send('Artículo añadido al carrito');
});

app.get('/cart', (req, res) => {
    console.log('Obteniendo carrito:', req.session.cart); // Log para depuración
    res.json(req.session.cart || []);
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
