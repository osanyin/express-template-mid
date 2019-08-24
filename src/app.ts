import express from 'express'
import morgan from 'morgan'

const app: express.Application = express()

app.use(morgan('tiny'))

app.get('/', function(req: express.Request, res: express.Response): void {
    res.send('Hello World!')
})

app.listen(3000, function(): void {
    console.log('Example app listening on port 3000!')
})
