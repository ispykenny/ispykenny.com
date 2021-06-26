const fs = require('fs')

const contentful = require("contentful");

const client = contentful.createClient({
  space: "t1u1jb3v81x6",
  accessToken: process.env.APIKEY
});


const fetchData = async (type) => {
  console.log(type)
  if(type === "rebuild") {
    return client
      .getEntries({
        'content_type': 'title'
      })
      .then(entry => {
        fs.writeFile('public/localendpoint.js', JSON.stringify(entry), function (err) {
          if (err) throw err;
          console.log('Saved!');
        });
        axios.post(`https://api.netlify.com/build_hooks/${process.env.DEPLOY}`)
        .then((res) =>  console.log(res))
        .catch((err) => console.log(err))
      })
      .catch(err => console.log(err))  
  }
}

const handler = async (event) => {
  
  const query = event.queryStringParameters.type; 
  console.log(event.queryStringParameters)
  let theData = await fetchData(query);
  return {
    statusCode: 200,
    body: JSON.stringify(theData)
  }
}

module.exports = { handler }