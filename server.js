const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 4000; 


app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'dashboard.html'));
});

// 👇 NUEVA RUTA PARA FAQ
app.get('/faq', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'faq.html'));
});

app.get('/api/usuario', (req, res) => {
    res.json({ nombre: "Esteban Restrepo", rol: "Corresponsal Aliado" });
});

app.listen(PORT, () => {
    console.log(`?? Districol V2 (Revolucionaria) corriendo en http://localhost:${PORT}`);
});
