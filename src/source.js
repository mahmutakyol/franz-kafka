const axios = require('axios')
require('dotenv').config()
const parseString = require('xml2js').parseString;

module.exports = async () => {
  let rates = []
  try {
    const response = await axios.get(`${process.env.SOURCE}`)

    parseString(response.data, (err, result) => {
      rates = result.Tarih_Date.Currency.map(c => {
        return { Name: `${c.$.CurrencyCode}TRY`, value: c.ForexBuying[0] }
      })
    })
  } catch (error) {
    console.error(error);
  } finally {
    return rates
  }
} 