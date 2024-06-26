const express = require('express')
const app = express()
const port = 3000
const uri = 'mongodb://localhost:27017/cloud-paint';
const bodyParser = require('body-parser');

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

const userRoute = require('./assets/js/routers/userRouter.js')
app.use('/user', userRoute)

const imgRoute = require('./assets/js/routers/imageRouter.js')
app.use('/img', imgRoute)

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

app.post('/register', (request, response) => {
    console.log("Form submitted");
    response.redirect("/login")
})

app.get('/login', (request, response) => {
    response.render("logIn.html");
});

app.post('/login', (request, response) => {
    console.log("Sucessful login");
    response.redirect(200, "/")
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});