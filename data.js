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
        console.log(q.page)
        res.end(JSON.stringify(data.gridData))
        // const myUrl = new URL(req.url)
        // console.log(myUrl.searchParams)
        // res.end(q.page)
        // const VariedData = data.slice(1)
        // console.log(VariedData)
        // if (q.page === 1) {
        //     res.writeHead(200, { 'Content-Type': 'application/json' })
        //     res.end(JSON.stringify(data.gridData))

        // }

        // else {
        //     const pageSize = data.gridData.pageSize
        //     res.writeHead(200, { 'Content-Type': 'application/json' })
        //     res.end(data.rowData.slice(pageSize * (q.page - 1), (pageSize * q.page) - 1))
        // }




    }

    else if (req.url === '/dashboard/report/portrail?page=2') {
        const q = url.parse(req.url, true).query

        const pageSize = (data.gridData)[0].pageSize
        console.log("page", pageSize)
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(data.rowData.slice(pageSize, pageSize * 2 - 1)))


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