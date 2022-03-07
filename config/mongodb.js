const mongodb = require("mongodb");

const url = "mongodb+srv://assign6:assign6@cluster0.3llq8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const mongodbClient = mongodb.MongoClient;

var connectedClient;

exports.connect = ()=> {
    mongodbClient.connect(url)
    .then((client) =>{
        connectedClient = client;
        console.log("DB Connected");
    })
    .catch(err => {console.log(err)});
}

exports.getCollection = (nameOfCollection) => {
    return connectedClient.db('restaurantdb').collection(nameOfCollection);
}


