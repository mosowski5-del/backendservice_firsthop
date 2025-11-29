const http = require('http');
const options = {
  hostname: 'localhost',
  port: '3002',
  path: '/users',
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  }
}

const webrequest = (app, fs) => {

    // variable

    // READ
    app.get('/webrequest', (req, res) => {
        console.log("hit first hop service");
        console.log(req.headers);


        http.get('http://node-service-secondhop-external.lasercannon:8081/users', (resp) => {
        let data = '';

        // A chunk of data has been recieved.
        resp.on('data', (chunk) => {
          data += chunk;

        });

        // The whole response has been received. Print out the result.
        resp.on('end', () => {

          res.send(data);

        });

      }).on("error", (err) => {
          console.log(err);
      });




    });
};

module.exports = webrequest;
