const http = require("http")
const fs = require("fs")
const url = require("url")

//* >>> https://www.youtube.com/results?search_query=tic+tac+toe
//* >>> https--{protocol(hyper text trasphar protocol)}--://--www.youtube.com--{domain}--/results--{path}--?--{query starts}--search_query=tic+tac+toe--{query}

//* >>> dependencies in package.json are Important, it store all the node modules info (when you run --npm i-- it look the dependencies and install )

const myServer = http.createServer((req, res) => {
    const log = `${Date.now()}: ${req.url} ${req.method} New Req Received\n`;
    const myUrl = url.parse(req.url, true);

    fs.appendFile("log.txt", log, (err, data) => {
        switch (myUrl.pathname) {
            case "/":
                res.end("home page");
                break;
            case "/about":
                const name = myUrl.query.userName;
                res.end(`hi, ${name}`);
                break;
            default:
                res.end("404 not found");
        }
    })
});

myServer.listen(8000, () => { console.log("Server Started!") });


