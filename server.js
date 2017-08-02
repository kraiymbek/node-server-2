const express = require('express');
const hbs = require('hbs');

const port = process.evn.PORT || 3000;

let app = express();





app.use((req,res,next)=>{

    let now = new Date().toString();
    let log = `${now}, ${req.method}, ${req.url}`;

    console.log(log);

    next();
});

app.use((req,res,next)=>{
    res.render('maintaince.hbs');
});

hbs.registerHelper('getCurrentYear',()=>{
    return new Date().getFullYear();
});
hbs.registerHelper('uppercase',(text)=>{
    return text.toUpperCase();
});


app.get('/', (req, res) => {
    res.render('home.hbs', {
        welcomeMessage: 'Welcome to Raiym web page'
    });
});


app.get('/about',(req,res)=>{
    res.render('about.hbs',{
        titlePage: 'Yes bitch fuck up'
    });
});

app.get('/bad',(req,res)=>{
    res.send({
        message: 'Bad request'
    })
});

app.listen(port,()=>{
    console.log(`Server is up on port ${port} `);
});

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine','hbs');
app.use(express.static(__dirname + '/public'));







