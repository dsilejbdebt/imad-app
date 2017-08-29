var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-one': {
                    title : 'Article One | dsi16',
                    heading: 'Article One',
                    date: '29/08/2017',
                    content: `<p>
                                This is my first article and the probably not the last.This is my first article and the probably not the last.
                                This is my first article and the probably not the last.This is my first article and the probably not the last.
                                This is my first article and the probably not the last.This is my first article and the probably not the last.
                                
                                </p>
                                
                                <p>
                                This is my first article and the probably not the last.This is my first article and the probably not the last.
                                This is my first article and the probably not the last.This is my first article and the probably not the last.
                                This is my first article and the probably not the last.This is my first article and the probably not the last.
                                </P>`

        
                    },
    'article-two' :{
                    title:'Article Two | dsi16',
                    heading:'Article Two',
                    date: '29/08/2017',
                    content:` 
            
                            <p>
                            This is my second article.
                            </p>`
    }
}; 

function createTemplate(data){
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
    
    var htmlTemplate= `
                <!doctype html>
                <html>
                <head>
                    <title>${title}</title>
                    <meta name="viewport" content="width=device-width, initail-scale=1"/>
                    
                    <link href="/ui/style.css" rel="stylesheet" />
                    
                </head>
                <body>
                    <div>
                        <a href="/">Home</a>
                    </div>
                    
                    <hr/>
                    
                    <div class=container>
                    <h3>${heading}</h3>
                    
                    <div>
                        ${date}
                    </div>
                    
                    <div>
                       ${content}
                    </div>
                    </div>
                </body>
                </html>`;
                return htmlTemplate;
                
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/:articlename', function (req, res) {
    var articlename= req.params.articlename;
  res.send(createTemplate(articles[articlename]));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
