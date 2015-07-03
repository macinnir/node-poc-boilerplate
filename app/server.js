// server.js

var express = require('express'),
	mysql = require('mysql'),
	bodyParser = require('body-parser'),
	cookieParser = require('cookie-parser'),
	config = require('./config'),
	compression = require('compression'),
	fs = require('fs')
;

var connection = mysql.createConnection(config.db);

var app = express();

// body parser
app.use( bodyParser.json( ) );
// urlencoded
app.use( bodyParser.urlencoded(
{
        extended: true
} ) );
// compression
app.use( compression( ) );
// static File Server
app.use( express.static( config.htmlDir,
{
        maxAge: 86400000
} ) );
app.use( cookieParser( ) );

app.once( 'error', function( err )
{
        if ( err.code === 'ERRADDRINUSE' )
        {
                console.error( 'Port ' + config.port + ' is already in use.' );
                process.exit( );
        }
        else
        {
                console.log( 'ERROR: ', err );
        }
} );

// routes
app.get('/', function( req, res ) {
	res.type('html');
	res.send(fs.readFileSync('./views/index.html'));
});

// End routes

connection.connect( function( err )
{
        if ( err )
        {
                console.error( 'Mysql Connection error: ' + err.stack );
                return;
        }
        console.log( 'connected on thread#' + connection.threadId );
} );

app.listen( config.port, function( )
{
        console.log( 'Server listening on port ' + config.port, 'PID: ' + process.pid );
} );
