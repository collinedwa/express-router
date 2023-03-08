const express = require("express")
const usersRouter = express.Router();

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

module.exports = usersRouter;