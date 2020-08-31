const express = require('express');
const app = express();

// bdd ultra sommaire
const files = [
    '56970887_335581420434238_1282057440187121664_n.jpg',
    '1513909717-vladi.png',
    'billie-holiday.jpg',
    'M_19ywsXx7p4XdPBglYvC8bWa-4.png'
]

// express static tout basique
app.use('/static', express.static(__dirname + '/public'));

// et une route, une seule
app.get('/img/:id', (req, res) => {
    // on interroge la "base" pour savoir si l'image existe
    const theFile = files[req.params.id];

    // si elle existe
    if (theFile) {
        res.redirect('/static/' + theFile);
    } else {
        res.status(404).send('nope');
    }
});

app.listen(7654, _ => console.log('http://localhost:7654/static/test.html'));