const express = require('express')
const mongoose = require('mongoose')
const cors = require("cors")
const RegisterModel = require('./Model/Register')

const app = express()

app.use(cors(
    {
        origin: ["https://blackbox-lemon.vercel.app"],
        methods: ["POST", "GET"],
        credentials: true
    }
));
app.use(express.json())

mongoose.connect('mongodb+srv://siva:L7vTobLaY5ndDoaY@cluster0.6nug7fa.mongodb.net/test?retryWrites=true&w=majority');
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
    console.log('Database connected!');
});


app.get("/users", async (req, res) => {
    try {
        const user = RegisterModel.find({});
        console.log(users);
        res.json(users);
    }

    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.post('/register', (req, res) => {
    const { name, category, price, quantinity, description } = req.body;
    RegisterModel.create({ name: name, category: category, price: price,quantinity:quantinity,description:description })
        .then(result => res.json(result))
        .catch(err => res.json(err))
})


app.listen(3001, () => {
    console.log("Server is Running")
})
