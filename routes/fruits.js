const express = require("express")
const fruitRouter = express.Router();
const {check, ValidationResult, validationResult} = require("express-validator");

let fruits = [
    {
        name: "Apple",
        color: "Red"
    },
    {
        name: "Banana",
        color: "Yellow"
    },
    {
        name: "Kiwi",
        color: "Green"
    },
    {
        name: "Grape",
        color: "Purple"
    },
];


fruitRouter.get("/", (req, res) => {
    res.json(fruits);
});

fruitRouter.get("/:id", (req, res) => {
    res.json(fruits[req.params.id-1]);
});

fruitRouter.post("/", [check("color").not().isEmpty().trim()], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()){ 
        res.json({error: errors.array()});
    }else{
        fruits.push(req.body);
        res.json(req.body);
    }
});

fruitRouter.put("/:id", (req, res) => {
    fruits[req.params.id-1] = req.body;
    res.json(req.body);
})

fruitRouter.delete("/:id", (req, res) => {
    fruits.splice(req.params.id-1, 1);
    res.send("Deleted");
})

module.exports = fruitRouter;