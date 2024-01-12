const express = require('express')
const cors = require('cors');

const app = express()

app.use(
    cors({
        origin: 'http://localhost:4200',
        methods: ["GET", "POST", "DELETE", "PATCH"],
        Credential:true
    })
)

const port = 4300
app.listen(port, () => {
    console.log('app listening on port', port);
})