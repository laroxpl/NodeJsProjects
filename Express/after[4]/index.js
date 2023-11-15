const express = require("express");
const app = express();

const hbs = require('express-handlebars');

app.use(express.static('public'));

app.engine('hbs', hbs({defaultLayouts: 'main', extname: '.hbs'}));
app.set('view engine', 'hbs');

const Post = require('./app/models/Post.js');

const post = require('./app/controllers/post.controllers.js')

app.get('/', function(req, res){
    res.render('home',{
        title: "Tytul z Express",
        content: "czesc programisto",
    });
});

app.get('/mongoose', function(req,res){
    
    Post.find({title: 'Post drugi'}).lean().exec(function(err, posts){
        console.log(posts);
    });

    let newPost = new Post({
        title: 'Post czwarty',
        content: 'Jestem postem czwartym',
        isPublic: true
    });

    newPost.save(function(err){
        console.log(err);
        console.log('Zapisalem');
    })

    res.send('done');
});

app.get('/blog', function(req, res){
    post.list(function(err, posts){
        if(err) res.send(err);
        res.render('blog', {posts})
    });
});

app.listen(8080, function(){
    console.log('Serwer Node.js dziala');
});