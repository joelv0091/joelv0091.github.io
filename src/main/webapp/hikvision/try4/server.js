const http = require('http');
const fs = require('fs');
const path = require('path');
const rootPath = __dirname;
const port = 8099;//默认端口号

//代理主页面
http.createServer(function(request, response){
    //代理转发请求 http
    //代理页面
    let filePath =  rootPath + request.url;
    if('/' === request.url){
        filePath =  rootPath + '/parentDemo.html';
    }
    fs.readFile(filePath,'binary',function(err,file){
        if(err){
            response.writeHead(500, { "Content-Type": "text/plain" });
            response.write(err + "\n");
            response.end();
            return;
        }else{
            if(/\.js/.test(filePath)){
                response.writeHead(200, { "Content-Type": "text/javascript" });
            }else if(/\.css/.test(filePath)){
                response.writeHead(200, { "Content-Type": "text/css" });
            }else if(/\.html/.test(filePath)){
                response.writeHead(200, { "Content-Type": "text/html" });
            }else if(/(\.webm)|(\.flv)/.test(filePath)){
                response.writeHead(200, { "Content-Type": "application/octet-stream" });
            }else if(/\.svg/.test(filePath)){
                response.writeHead(200, { "Content-Type": "image/svg+xml" });
            }else if(/\.jpg/.test(filePath)||/\.jpeg/.test(filePath)){
                response.writeHead(200, { "Content-Type": "image/jpeg" });
            }else if(/\.ico/.test(filePath)){
                response.writeHead(200, { "Content-Type": "image/x-icon" });
            }else if(/\.png/.test(filePath)){
                response.writeHead(200, { "Content-Type": "image/png" });
            }else{
                response.writeHead(200, { "Content-Type": "text/plain" });
            }
            response.write(file,'binary');
            response.end();
        }
    });
}).listen(port);

http.createServer(function(request, response){
    //代理转发请求 http
    //代理页面
    let filePath =  rootPath + request.url;
    if('/demo_window_integration_preview.html' === request.url){
        filePath =  rootPath + '/demo_window_integration_preview.html';
    }
    fs.readFile(filePath,'binary',function(err,file){
        if(err){
            response.writeHead(500, { "Content-Type": "text/plain" });
            response.write(err + "\n");
            response.end();
            return;
        }else{
            if(/\.js/.test(filePath)){
                response.writeHead(200, { "Content-Type": "text/javascript" });
            }else if(/\.css/.test(filePath)){
                response.writeHead(200, { "Content-Type": "text/css" });
            }else if(/\.html/.test(filePath)){
                response.writeHead(200, { "Content-Type": "text/html" });
            }else if(/(\.webm)|(\.flv)/.test(filePath)){
                response.writeHead(200, { "Content-Type": "application/octet-stream" });
            }else if(/\.svg/.test(filePath)){
                response.writeHead(200, { "Content-Type": "image/svg+xml" });
            }else if(/\.jpg/.test(filePath)||/\.jpeg/.test(filePath)){
                response.writeHead(200, { "Content-Type": "image/jpeg" });
            }else if(/\.ico/.test(filePath)){
                response.writeHead(200, { "Content-Type": "image/x-icon" });
            }else if(/\.png/.test(filePath)){
                response.writeHead(200, { "Content-Type": "image/png" });
            }else{
                response.writeHead(200, { "Content-Type": "text/plain" });
            }
            response.write(file,'binary');
            response.end();
        }
    });
}).listen(8090);

console.log(`run server success~ listen on port: ${port}`);