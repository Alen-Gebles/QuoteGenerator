const request = require('request');
var category = 'happiness';
request.get({
  url: 'https://api.api-ninjas.com/v1/quotes?category=happines',
  headers: {
    'X-Api-Key': '5OgR1t1BBIpQPF9RO7BM5A==ZdQCpLfmdNJ872GB'
  },
}, function(error, response, body) {
  if(error) return console.error('Request failed:', error);
  else if(response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));
  else console.log(body)
});