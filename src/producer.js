const source = require('./source')
const topic = require('./topic')

source().then((res) => {
  console.log(res);
})