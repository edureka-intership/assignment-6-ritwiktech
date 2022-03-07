const res = require("express/lib/response");
const Restaurant_Search = require("../modals/res_search");

const repo = require("../repositories/res_search");

exports.addRestaurant = (req,res) => {
    console.log(req.body);

    const newRestaurant = new Restaurant_Search(req.body._id, req.body.name, req.body.city_name,
        req.body.city, req.body.area, req.body.locality, req.body.thumb, req.body.cost, req.body.address, 
        req.body.type, req.body.Cuisine);

        repo.add(newRestaurant, ()=>{
            res.send("Restaurant Added");
        })

}

exports.getAllRestaurants = (req,res) => {
    repo.getAll((restaurants) => {
        res.send(restaurants);
    })
}

exports.getRestaurantByLocation = (req,res) => {
    const loc = req.params.loc;
    repo.getByLocation(loc,(restaurant) => {
        res.send(restaurant);
    })
}

exports.filterCuisine = (req,res) =>{
    const Cuisine = req.params.Cuisine;
    repo.getByCuisine(Cuisine,(restaurant) => {
        res.send(restaurant);
    })
}

exports.sortByHightolow = (req,res) =>{
    repo.sortByHightolow((restaurants) => {
        res.send(restaurants);
    })
}

exports.getLowtoHigh = (req,res) =>{
    repo.getLowtoHigh((restaurant) =>{
        res.send(restaurant)
    })
}
