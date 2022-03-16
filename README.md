# franz-kafka
kafka-nodejs-docker

Start Kafka:
```bash
$ npm i 
$ docker-compose up 
```

Create Topic:
```bash
$ npm run topic
````

Run Producer:
```bash
$ npm run produce
````

Example Env File:

```text
SOURCE=https://www.tcmb.gov.tr/kurlar/today.xml
KAFKA_CLIENT_ID=exchangeRate
KAFKA_BROKER_LOCAL=YOUR_IP_ADDRESS:9092
```