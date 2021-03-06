var db = require("../models");

module.exports = function (app) {

  app.get("/api/burgers", function (req, res) {
    db.Burger.findAll({})
      .then(function (burgerData) {
        res.json(burgerData)
      });
  });

  // post route
  app.post("/api/burgers", function (req, res) {
    // takes the request object using it as input for burger.addBurger
    db.Burger.create({
      burger_name: req.body.burger_name,
      devoured: false
    }).then(function (burgerData) {
      res.json(burgerData);
    })
  });

  //put route
  app.put("/api/burgers/:id", function (req, res) {
    db.Burger.update({
      devoured: true
    }, {
        where: {
          id: req.params.id
        }
      })
      .then(function (burgerData) {
        res.json(burgerData);
      });
  });
}
