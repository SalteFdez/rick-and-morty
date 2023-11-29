let http = require("http");

const PORT = 3001;

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (req.url === "/rickandmorty/character") {
        let path = url.shift("/");
        let finalPath = path[path.lenght - 1];

        const character = data.find(obj => obj.id === Number(finalPath))
        res.end(JASON.stringify(character))
    }
}).listen(PORT, "localhost");