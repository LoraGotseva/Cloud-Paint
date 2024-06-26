const express = require('express')
const app = express()
const port = 3000
// const uri = 'mongodb://localhost:27017/cloud-paint';
const bodyParser = require('body-parser');

app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json())

const dbConfig = require('./assets/js/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Databse Connected Successfully!!");
}).catch(err => {
    console.log('Could not connect to the database', err);
    process.exit();
});

let auth = require('./assets/js/auth/auth.js')(mongoose)
let saveImg = require('./assets/js/saveImgToDB.js')(mongoose)

app.use(express.static(__dirname));
app.use(express.static(__dirname + '/assets'));
app.set("views", __dirname + '/assets/html')
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

app.get('/', (request, response) => {
    response.render("index.html");
});

app.get('/register', (request, response) => {
    response.render("signUp.html");
});

app.post('/register', async (request, response) => {
    await auth.createUser(request.body);
    response.redirect("/login")
})

app.get('/login', (request, response) => {
    response.render("logIn.html");
});

app.post('/login', async (request, response) => {
    let userToken;
    try {
        userToken = await auth.loginUser(request.body);
        response.setHeader("Set-Cookie", `token=${userToken}`);
        response.redirect("/");
    } catch (error) {
        return response.status(401).send(error.message);
    }
})

app.post('/upload', async (request, response) => {
    if (request.headers.cookie !== undefined) {
        let userEncrypted = request.headers.cookie.split('token=')[1];
        let userDecrypted = JSON.parse(atob(userEncrypted));
        await saveImg.uploadImage({ userId: userDecrypted.id, imgEncoded: JSON.stringify(request.body) });
        response.status(201).json({ url: '/' });
    }
    else {
        response.status(401).json({ url: '/login' });
    }
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});