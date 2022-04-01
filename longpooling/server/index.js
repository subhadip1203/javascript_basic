const express = require('express');
const cors = require("cors")
const events = require('events');
const app = express();

const messageEventEmitter = new events.EventEmitter();

app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(express.json());



app.get('/messages', (req, res) => {
  const time = (new Date()).getTime();
  const seconds = 2000
  return setTimeout(function () {
    console.log("sending data ...")
    return res.json({ hasValue: true, value: time });
  }, seconds);

});


const port = 3000;
app.listen(port, () => {
  console.log(`Server listening at port ${port}`);
});