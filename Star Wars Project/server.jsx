const express = require('express')
const { resolve } = require('path')
const app = express()

app.use('/',
    express, Static(
        resolve(
            __dirname,
            '/build'
        )
    )
)

    .listen(process.env.PORT || 3000, (err) => {
        if (err) { return console.log(err) }

        console.log('Alo')
    })