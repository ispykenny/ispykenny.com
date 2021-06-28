require('dotenv').config();
const fs = require('fs')
const contentful = require("contentful");

const client = contentful.createClient({
  space: "t1u1jb3v81x6",
  accessToken: process.env.WAP
});


const fetchData = async (type) => {
  if(type === "rebuild") {
    return client
    .getEntries({
        'content_type': 'title'
      })
      .then(entry => {
        return entry
      })
      .catch(err => console.log(err))  
  }
}

const handler = async (event) => {
  const query = event.queryStringParameters.type; 
  const data = await fetchData(query);
  
  if(query === "rebuild") {
    fs.writeFile('/localendpoint.js', JSON.stringify(data), function (err) {
      if (err) throw err;
    });
  }
  return {
    statusCode: 200,
    body: JSON.stringify(data)
  }
}

module.exports = { handler }