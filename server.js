const express = require("express")
const app = express()
const port = 3000
const fruitRouter = require("./routes/fruits")
const usersRouter = require("./routes/users")

app.use(express.json());

app.use("/fruits", fruitRouter);

app.use("/users", usersRouter);


app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
