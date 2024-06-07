require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const session = require('express-session');
const axios = require('axios');
const morgan = require('morgan');
const path = require('path');
const mercadopago = require('mercadopago');

const app = express();
const port = 3001;

const token_env = process.env.MERCADOPAGO_ACCESS_TOKEN;



// Configurar cors
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static(path.resolve("src/public")));

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
    secret: process.env.SESSION_SECRET || 'mysecret',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

// Rutas
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

//localizacion cliente
let storeCoordinates = { lat: 0, lng: 0 };

// Función para obtener las coordenadas de la dirección de la tienda
async function getStoreCoordinates() {
    const address = process.env.STORE_ADDRESS;
    try {
        const response = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(address)}&key=${process.env.OPENCAGE_API_KEY}`);
        if (response.data.results.length === 0) {
            console.error('Dirección de la tienda no válida');
            return;
        }
        const { lat, lng } = response.data.results[0].geometry;
        storeCoordinates = { lat, lng };
        console.log('Coordenadas de la tienda obtenidas:', storeCoordinates);
    } catch (error) {
        console.error('Error al obtener las coordenadas de la tienda:', error);
    }
}

app.post('/calculateShipping', async (req, res) => {
    const { address } = req.body;
    console.log('Received Address:', address); // Agrega esta línea para depuración

    try {
        const encodedAddress = encodeURIComponent(address);
        const response = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${encodedAddress}&key=${process.env.OPENCAGE_API_KEY}`);
        console.log('OpenCage Response:', response.data); // Agrega esta línea para depuración

        if (response.data.results.length === 0) {
            return res.status(400).json({ message: 'Dirección no válida' });
        }

        // Filtrar los resultados por distancia menor a 100 km
        const validResults = response.data.results.filter(result => {
            const { lat, lng } = result.geometry;
            const distance = getDistanceFromLatLonInKm(storeCoordinates.lat, storeCoordinates.lng, lat, lng);
            return distance <= 100;
        });

        if (validResults.length === 0) {
            return res.status(400).json({ message: 'No se encontró una dirección válida dentro de los 100 km' });
        }

        const { lat, lng } = validResults[0].geometry;
        const distance = getDistanceFromLatLonInKm(storeCoordinates.lat, storeCoordinates.lng, lat, lng);
        const shippingCost = calculateShippingCost(distance);

        res.json({ distance, shippingCost, results:
            validResults });
        } catch (error) {
            console.error('Error al calcular el envío:', error);
            if (error.response && error.response.data) {
                console.error('Error Response Data:', error.response.data);
            }
            res.status(500).json({ message: 'Error en el servidor' });
        }
    });
    
    function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
        const R = 6371; // Radio de la Tierra en km
        const dLat = deg2rad(lat2 - lat1);
        const dLon = deg2rad(lon2 - lon1);
        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const d = R * c; // Distancia en km
        return d;
    }
    
    function deg2rad(deg) {
        return deg * (Math.PI / 180);
    }
    
    function calculateShippingCost(distance) {
        const baseCost = 100; // Costo base de envío (ajustado a un valor más razonable)
        const costPerKm = 5; // Costo adicional por km (ajustado a un valor más razonable)
        return baseCost + (distance * costPerKm);
    }


    
    //FUNCION MERCADO PAGO 
    
    app.post('/create_preference', async (req, res) => {
        // Step 2: Initialize the client object
        const client = new mercadopago.MercadoPagoConfig({ accessToken: token_env, options: { timeout: 5000, idempotencyKey: 'abc' } });


        const { cartItems, shippingCost, address, name, email } = req.body;

        let items = cartItems.map(item => ({
            title: item.name,
            unit_price: item.total / item.quantity,
            quantity: item.quantity,
          }));
        
          items.push({
            title: 'Costo de envío',
            unit_price: shippingCost,
            quantity: 1,
          });

          const preferenceBody = {
            
            body: {
                items: [
                  {
                    title: 'Mi producto',
                    quantity: 1,
                    unit_price: 2000
                  }
                ],
              }
          };
        
          try {
            const preference = new mercadopago.Preference(client);
            const response = await preference.create(preferenceBody);
            res.status(200).json({ id: response.body.id });
          } catch (error) {
            console.error('Error al crear la preferencia:', error);
            res.status(500).json({ error: 'Error al crear la preferencia de pago' });
          }  
        
    });
    
    
    
    
    

    app.listen(port, async () => {
        await getStoreCoordinates(); // Obtener las coordenadas de la tienda al iniciar el servidor
        console.log(`Servidor corriendo en http://localhost:${port}`);
    });
    