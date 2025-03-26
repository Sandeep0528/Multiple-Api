const http = require("http")
const Port = 3000
const productData = require("./products")
const data = require("./data.json")



const server = http.createServer((req, res) => {
    if (req.url == "/" && req.method == "GET") {
        res.end("Go to products page")
    } else if (req.url == "/products" && req.method == "GET") {
        res.end(JSON.stringify(productData))
    } else if (req.url == "/data" && req.method == "GET") {
        res.end(JSON.stringify(data))
    } else {
        res.end("page not founf")
    }
})


server.listen(Port, () => {
    console.log(`Server is running on:http://localhost:${Port}`);

})