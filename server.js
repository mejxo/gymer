const express = require('express');
const path = require('path');
const bodyParser = require('body-parser'); //REVIEW: see https://medium.com/@mmajdanski/express-body-parser-and-why-may-not-need-it-335803cd048c
const knex = require('knex');

const db = knex({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: '123',
        database: 'postgres',
        port: '3000',
    }
})

const app = express();

let intialPath = path.join(__dirname, "public"); //SUGGESTION: nemusite striktne pouzivat `path`. Stacilo by `${__dirname}/public`. Path by som pouzival keby som potreboval sa moovovat hore v dir tree

app.use(bodyParser.json()); //REVIEW: see https://medium.com/@mmajdanski/express-body-parser-and-why-may-not-need-it-335803cd048c
app.use(express.static(intialPath));

app.get('/', (req, res) => {
    res.sendFile(path.join(intialPath, "plan.html"));
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(intialPath, "login.html"));
})

app.get('/signup', (req, res) => {
    res.sendFile(path.join(intialPath, "signup.html"));
})

app.post('/register-user', (req, res) => {
    const { name, email, password } = req.body;

    if(!name || !email || !password || !name.length || !email.length || !password.length) { //REVIEW: osobne by som pouzil len `!name.length`. Mozno este v HTML dany input by mal byt `required`
        res.json('fill all the fields'); //REVIEW: hodte tam aj http kod, nejaky suitable najdete tu https://http.cat
    } else {
        db("users").insert({
            name: name,
            email: email,
            password: password //REVIEW: mali by ste hesla saltovat + hashovat • see https://youtu.be/4lAqwAnMr6k
                                // Mozno by som hashoval este na stranke a posielal by som v requeste saltnute+hashnute heslo so saltom
        })
        .returning(["name", "email"])
        .then(data => {
            res.json(data[0])
        })
        .catch(err => {
            if(err.detail.includes('already exists')){
                res.status(400).json({ error: 'email already exists' });
            }
        })
    }
})

app.post('/login-user', (req, res) => {
    const { email, password } = req.body;

    db.select('name', 'email')
    .from('users')
    .where({
        email: email,
        password: password
    })
    .then(data => {
        if (data.length) {
            res.json(data[0]);
        } else {
            res.status(401).json({ error: 'email or password is incorrect' });
        }
    })
})

app.listen(3002, (req, res) => {
    console.log('listening on port 3002... http://localhost:3002')
})