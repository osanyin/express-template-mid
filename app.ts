import express from "express"
import morgan from "morgan"
import errorHandler from "errorhandler"
import bodyParser from "body-parser"

import routes from "./routes"

const port = process.env.PORT || 8080
const app: express.Application = express()

if (app.get("env") === "development") {
    app.use(errorHandler())
}

app.use(morgan("dev"))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(routes)

app.listen(port, function() {
    console.log("Listening on port " + port)
})
