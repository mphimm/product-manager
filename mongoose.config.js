const mongoose = require ("mongoose")

mongoose
    .connect("mongodb://localhost/productdb", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then (() => console.log ("Established a connection to the db"))
    .catch (err => 
        console.log ("Something went wrong when connecting the db")
    );
