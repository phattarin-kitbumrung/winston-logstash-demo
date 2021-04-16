import express from 'express'
import winston from 'winston'
import WinstonLogStash from 'winston3-logstash-transport'

const app = express()
const port = 3000

// add data to logstash
const logger = winston.createLogger()
logger.add(new WinstonLogStash({
  mode: 'tcp',
  host: 'localhost',
  port: 28777
}))
logger.info('add log by minizymint')
//logger.error('Error!')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {       
    console.log( `server started at http://localhost:${port}`)
})