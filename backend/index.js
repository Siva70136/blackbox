const express = require('express')
const mongoose = require('mongoose')


const app = express()

// app.use(express.json())

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://blackbox-lemon.vercel.app');
  // You can specify more headers and methods as needed
  next();
});

app.options('*', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://blackbox-lemon.vercel.app');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.status(200).send();
});


mongoose.connect('mongodb+srv://siva:L7vTobLaY5ndDoaY@cluster0.6nug7fa.mongodb.net/test?retryWrites=true&w=majority');


app.get("/", (req, res) => {
        const database = client.db('siva'); // Replace 'your-database-name' with your actual database name
        const collection = database.collection('stocks');
        const stocks = await collection.find({}).toArray();
    res.json(stocks);
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
