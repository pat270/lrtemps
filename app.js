
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

app.get('/accordions', function(req, res){
  res.render('accordions', { title: 'Accordions' });
});

app.get('/alerts-and-progress-bars', function(req, res){
  res.render('alerts-and-progress-bars', { title: 'Alerts and Progress Bars' });
});

app.get('/blog-1-column', function(req, res){
  res.render('blog-1-column', { title: 'Blog 1 Column' });
});

app.get('/breadcrumb-and-paginations', function(req, res){
  res.render('breadcrumb-and-paginations', { title: 'Breadcrumb and Paginations' });
});

app.get('/buttons', function(req, res){
  res.render('buttons', { title: 'Buttons' });
});

app.get('/components', function(req, res){
  res.render('components', { title: 'Components' });
});

app.get('/form-elements', function(req, res){
  res.render('form-elements', { title: 'Form Elements' });
});

app.get('/form-examples', function(req, res){
  res.render('form-examples', { title: 'Form Examples' });
});

app.get('/elements', function(req, res){
  res.render('elements', { title: 'Elements' });
});

app.get('/images-and-thumbnails', function(req, res){
  res.render('images-and-thumbnails', { title: 'Images and Thumbnails' });
});

app.get('/icons', function(req, res){
  res.render('icons', { title: 'Icons' });
});

app.get('/grid', function(req, res){
  res.render('grid', { title: 'Grid' });
});

app.get('/modals', function(req, res){
  res.render('modals', { title: 'Modals' });
});

app.get('/list-groups', function(req, res){
  res.render('list-groups', { title: 'List Groups' });
});

app.get('/nav', function(req, res){
  res.render('nav', { title: 'Nav' });
});

app.get('/navbar', function(req, res){
  res.render('navbar', { title: 'Navbar' });
});

app.get('/page-header-jumbotron-and-media-objects', function(req, res){
  res.render('page-header-jumbotron-and-media-objects', { title: 'Page Header, Jumbotron, and Media Objects' });
});

app.get('/panels', function(req, res){
  res.render('panels', { title: 'Panels' });
});

app.get('/tables', function(req, res){
  res.render('tables', { title: 'Tables' });
});

app.get('/timelines', function(req, res){
  res.render('timelines', { title: 'Timelines' });
});

app.get('/typography', function(req, res){
  res.render('typography', { title: 'Typography' });
});

app.get('/widgets', function(req, res){
  res.render('widgets', { title: 'Widgets' });
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
