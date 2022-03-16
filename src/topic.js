const { Kafka } = require('kafkajs')
require('dotenv').config()

createTopic()

async function createTopic () {
  try {
    const kafka = new Kafka({
      clientId: process.env.KAFKA_CLIENT_ID,
      brokers: [process.env.KAFKA_BROKER_LOCAL]
    })

    const admin = kafka.admin()
    await admin.connect()
    await admin.createTopics({
      topics: [
        {
          topic: 'ExchangeRates',
          numPartitions: 1
        }
      ]
    })

    await admin.disconnect()
  } catch (error) {
    console.log('An error occured', error)
  } finally {
    process.exit(0)
  }
}