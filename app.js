
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);

app.get('/blog-1-column', function(req, res){
  res.render('blog-1-column', { title: 'Blog 1 Column' });
});

app.get('/form-elements', function(req, res){
  res.render('form-elements', { title: 'Form Elements' });
});

app.get('/navbar', function(req, res){
  res.render('navbar', { title: 'Navbar' });
});

app.get('/panels', function(req, res){
  res.render('panels', { title: 'Panels' });
});

app.get('/tables', function(req, res){
  res.render('tables', { title: 'Tables' });
});

app.get('/typography', function(req, res){
  res.render('typography', { title: 'Typography' });
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
