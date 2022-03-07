const mongodb = require("../../config/mongodb");

exports.add = (item, callback) => {
    const collection = mongodb.getCollection("Restaurant");

    collection.insertOne({_id:item._id , name:item.name , city_name:item.city_name , city:item.city , 
        area:item.area , locality: item.locality , thumb:item.thumb , cost:item.cost , 
        address:item.address , type:item.type , Cuisine:item.Cuisine})
         .then(() =>{
             callback();
         })
         .catch(err => {console.log(err)});
}

exports.getAll = (callback) =>{
    const collection = mongodb.getCollection("Restaurant");
    collection.find().toArray().then(
        (restaurant) => {
            callback(restaurant);
        },
        err => {
            console.log(err);
        }
    )
}

exports.getByLocation = (location, callback) =>{
    const collection = mongodb.getCollection("Restaurant");
    collection.find({city_name:location}).toArray().then(
        (restaurant) => {
            callback(restaurant);
        },
        err => {
            console.log(err);
        }
    )
}

exports.getByCuisine = (Cuisine, callback) =>{
    const collection = mongodb.getCollection("Restaurant");
    collection.find({'Cuisine.name':Cuisine}).toArray().then(
        (restaurant) => {
            callback(restaurant);
        },
        err => {
            console.log(err);
        }
    )
}

exports.sortByHightolow = (callback) =>{
    const collection = mongodb.getCollection("Restaurant");
    collection.find().sort({cost:-1}).toArray().then(
        (restaurant) => {
            callback(restaurant);
        },
        err => {
            console.log(err);
        }
    )
}

exports.getLowtoHigh = (callback) =>{
    const collection = mongodb.getCollection("Restaurant");
    collection.find().sort({cost:1}).toArray().then(
        (restaurant) => {
            callback(restaurant);
        },
        err => {
            console.log(err);
        }
    )
}