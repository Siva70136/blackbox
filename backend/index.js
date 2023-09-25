const express = require('express')
const mongoose = require('mongoose')
const cors = require("cors")

const app = express()

app.use(cors(
    {
        origin: ["https://blackbox-lemon.vercel.app"],
        methods: ["POST", "GET"],
        credentials:true
    }
));
app.use(express.json())


mongoose.connect('mongodb+srv://siva:L7vTobLaY5ndDoaY@cluster0.6nug7fa.mongodb.net/test?retryWrites=true&w=majority').then(()=>{
    console.log("MongoDB is Connected..")
}).catch(err=>{
    console.log(err.message);
})


app.get("/", (req, res) => {

    res.json("hello");
})
app.post('/register', (req, res) => {
    const {name, email, password} = req.body;
    RegisterModel.findOne({email: email})
    .then(user => {
        if(user) {
            res.json("Already have an account")
        } else {
            RegisterModel.create({name: name, email: email, password: password})
            .then(result => res.json(result))
            .catch(err => res.json(err))
        }
    }).catch(err => res.json(err))
})


app.listen(3001, () => {
    console.log("Server is Running")
})
