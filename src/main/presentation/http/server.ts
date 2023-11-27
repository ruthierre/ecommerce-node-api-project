import http from 'node:http';

const createHTTPServer = async (): Promise<http.Server> => {
    
    const httpServer: http.Server = http.createServer(
        function(request, response){
            response.writeHead(200, {'Contet-Type': 'text/html'});
            response.write('<html><body><p>Hello, im server node.js!</p></body></html>');
            response.end();
        }
    );

    return httpServer;
}

export {createHTTPServer};