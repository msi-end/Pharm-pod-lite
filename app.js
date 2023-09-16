const compression = require('compression');
const express = require('express');
const path = require('path');
const StaticGzip = require('express-static-gzip');
const conn = require('./db.con')


const PORT = process.env.PORT || "3001";
const app = express();

app.set("views", path.join(__dirname, "views"));
app.use('static', express.static(path.join(__dirname, "static")));
app.set('view engine', 'ejs');

app.use(compression({
    level: 7,
    threshold: 0
}));
app.use(
    '/static',
    StaticGzip(path.join(__dirname, '/static'), {
        enableBrotli: true,
        orderPreference: ['br', 'gz'],
        setHeaders: (res, path) => {
            res.setHeader('Cache-Control', 'public, max-age=31536000');
        },
    })
)

//new updates

app.get('/', (req, res) => {
    conn.query(`SELECT * FROM cl_doctor`, (err, result) => {
        res.status(200).render('index.ejs', {result})
        console.log(result);
     })
});

//remove this get '/'
// app.get('/', (req, res) => {
//     res.status(200).sendFile(path.join(__dirname, '/views/index.ejs'))
// });

app.get('*', (req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views/gallery.html'))
    res.status(404).sendFile(path.join(__dirname, '/views/error.html'))
})
app.listen(PORT, () => { console.log('working on port 3001'); })
