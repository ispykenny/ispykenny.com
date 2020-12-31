// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
require('dotenv').config()
const axios = require('axios')
const contentful = require('contentful');
const client = contentful.createClient({
  space: "b1ubzx8lmcrh",
  accessToken: process.env.APIKEY
});


const theThing = async (contentType) => {
  if(contentType === "all") {
    return client.getEntries("Vd0IZq9i5l1imkqw")
      .then(entry => entry)
      .catch(err => console.log(err));
  } else {
    return {
      
    }
  }
}

const handler = async (event) => {
  console.log(event.queryStringParameters.type)
  let theData = await theThing('all');
    try {
      return {
        statusCode: 200,
        body : JSON.stringify(theData, null , 2)
      }
    } catch(err) {
      return {
        body: 'error'
      }
    }
}

module.exports = { handler }
