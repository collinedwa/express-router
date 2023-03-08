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

fruitRouter.post("/", (req, res) => {
    fruits.push(req.body);
    res.json(req.body);
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