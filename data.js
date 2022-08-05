const http = require('http')
const fs = require('fs')
const path = require('path')
const d = require('./report.js');
const data = require('./gridData')
const url = require('url')

http.createServer((req, res) => {

    // if (req.params)


    if (req.url === '/dashboard/report/portrail?page=1') {
        const q = url.parse(req.url, true).query
        // const myUrl = new URL(req.url)
        // console.log(myUrl.searchParams)
        // res.end(q.page)

        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(data))

    }


    else if (req.url === '/dashboard/report') {

        {
            res.writeHead(200, 'Content-Head', 'application/json')
            res.end(JSON.stringify(d))

        }
    }

    // if (req.url == '/report') {
    //     const data = require('./report.json');
    //     res.end(JSON.stringify(data));
    // }

    // if (req.url == '/report/page/2') {
    //     const data = require('./reportPage2.json');
    //     res.end(JSON.stringify(data));
    // }

}).listen(8000, () => console.log('Server Running'))