const express = require("express")
const fruitRouter = express.Router();

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

module.exports = fruitRouter;