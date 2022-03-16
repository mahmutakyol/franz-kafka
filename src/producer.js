const source = require('./source')
const { Kafka } = require('kafkajs')
require('dotenv').config

produce()

async function produce() {

  try {
    const kafka = new Kafka({
      clientId: process.env.KAFKA_CLIENT_ID,
      brokers: [process.env.KAFKA_BROKER_LOCAL]
    }) 

    const producer = kafka.producer()

    await producer.connect()

    const exchangeRates = await source()

    const result = await producer.send({
      topic: 'ExchangeRates',
      messages: [
        {
          value: JSON.stringify(exchangeRates),
          partition: 0
        }
      ]
    })
    console.log(result)
    await producer.disconnect()
  } catch (error) {
    console.log('An error occured', error)
  } finally {
    process.exit(0)
  }
}