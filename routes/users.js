const express = require("express")
const usersRouter = express.Router();
const {check, ValidationResult, validationResult} = require("express-validator");

let users = [
    {
        name: "User 1",
        age: 30
    },
    {
        name: "User 2",
        age: 45
    },
    {
        name: "User 3",
        age: 27
    },
    {
        name: "User 4",
        age: 22
    }
];


usersRouter.get("/", (req, res) => {
    res.json(users);
});

usersRouter.get("/:id", (req, res) => {
    res.json(users[req.params.id-1]);
});

usersRouter.post("/", [check("name").not().isEmpty().trim()],(req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()){ 
        res.json({error: errors.array()});
    }else{
        users.push(req.body);
        res.json(req.body);
    }
});

usersRouter.put("/:id", (req, res) => {
    users[req.params.id-1] = req.body;
    res.json(req.body);
})

usersRouter.delete("/:id", (req, res) => {
    users.splice(req.params.id-1, 1);
    res.send("Deleted");
})

module.exports = usersRouter;