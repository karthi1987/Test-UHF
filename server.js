var express = require( 'express' );
var bodyParser = require( 'body-parser' );
var httpProxy = require( 'http-proxy' );
var proxy = httpProxy.createProxyServer( {} );
var path = require( 'path' );
var cookieParser = require( 'cookie-parser' );
var serverConfig = require( './server.config.js' );
var basePath = '/iSiteWatch-React';

const ROOT_PATH = path.resolve( __dirname ) + '/dist';

function errorHandler( err, req, res, next ) {
    res.status( 500 );
    res.render( 'error', { error: err } );
    next( err );
}

var app = express();
app.set('view engine', 'html');
app.use( basePath, express.static( path.join( __dirname, 'dist' ) ) );
app.use( bodyParser.urlencoded( { extended: false } ) );
app.use( bodyParser.json() );

app.post( basePath, function( req, res ) {
    res.sendStatus( 200 );
} );

app.post( '/test-403', function( req, res ) {
    res.sendStatus( 403 );
} );

app.use( errorHandler );

app.use( function( req, res, next ) {
    res.header( 'Access-Control-Allow-Origin', '*' );
    res.header( 'Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS' );
    res.header( 'Access-Control-Allow-Headers', 'Content-Type, X-Requested-With' );
    next();
} );
app.use( cookieParser() );
app.enable( 'trust proxy' );

proxy.on( 'proxyReq', function( proxyReq, req, res, options ) {
    console.log( 'proxy request' );
} );

proxy.on( 'error', function ( err, req, res ) {
    res.writeHead( 500, {
        'Content-Type': 'text/plain'
    } );

    res.end( 'Something went wrong. And we are reporting a custom error message.' );
} );

app.listen( serverConfig.PORT, serverConfig.LOCAL_PATH, function( err, result ) {
    if( err ) {
        console.log( err );
    }

    console.log( 'server listening at ' + serverConfig.LOCAL_PATH + ':' + serverConfig.PORT );
} );

app.get( '*', function( req, res ) {
    res.sendFile( ROOT_PATH + '/index.html' );
} );
