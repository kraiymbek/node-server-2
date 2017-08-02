const express = require('express');
const hbs = require('hbs');

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

app.listen(3000,()=>{
    console.log('Port is on 3000');
});

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine','hbs');
app.use(express.static(__dirname + '/public'));







