var express = require('express')
var app = express()
var bodyParser = require('body-parser')

app.set('port', (process.env.PORT || 3001))
// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.post('/', jsonParser, function (req, res) {
  if (!req.body) return res.sendStatus(400)
  //console.log("Response is",req.body)
  //bodydata = JSON.parse(req.body);
  console.log("Request data", req.query);
  console.log("Project ID", req.query.projectId);

  console.log("Body data",req.body.payload);

  //console.log(bodydata.steps);
  //console.log("Stirigy data",JSON.stringify(req.body.payload.steps))
  res.send(req.body)
  // create user in req.body
})
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('Hello World12334!')
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
