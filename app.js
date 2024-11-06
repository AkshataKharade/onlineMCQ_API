'use strict';

const restify = require('restify');
const morgan = require('morgan');
const restifybodyparser = require('restify-plugins');
const corsmiddleware = require('restify-cors-middleware');
const routes = require('./config/routes');
const config = require('./config/config');
const filter = require('./libs/filter/app_filter');
let server;
server = restify.createServer();

server.use(morgan('dev'));
server.use(restifybodyparser.acceptParser(server.acceptable));
server.use(restifybodyparser.queryParser({mapParams:true}));
server.use(restifybodyparser.bodyParser({mapParams:false,keepExtensions:false,multiples:true}));
server.use(restifybodyparser.authorizationParser());
server.use(restifybodyparser.gzipResponse());

const cors = corsmiddleware({
    origins:['*'],
    allowHeaders:['*'],
    exposeHeaders:['*']
});

server.pre(cors.preflight);
server.use(cors.actual);

server.pre(function(request,response,next){
    next();
});

server.on('NotFound',function(req,res,err,cb){
    res.send("REQUEST NOT FOUND !!");
});

server.on('MethodNotAllowed',function(req,res,err,cb){
    res.send("METHOD NOT ALLOWED !!");
});

server.get('/',(req,res,next)=>{
    res.send(200);
})

server.get('/api/getSurvey',filter.getMethod);
server.post('/api/createTest',filter.postMethod);



server.listen(config['server'].port,function(){
    console.log(`server started on`+' '+config['server'].port);
});