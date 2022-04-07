const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

let clients = [];
let facts = [];

app.get('/status', (req, res) => response.json({clients: clients.length}));

app.get('/events', (req,res) => {
  const headers = {
    'Content-Type': 'text/event-stream',
    'Connection': 'keep-alive',
    'Cache-Control': 'no-cache'
  };
  response.writeHead(200, headers);

  const data = `data: ${JSON.stringify(facts)}\n\n`;

  response.write(data);

  const clientId = Date.now();

  const newClient = {
    id: clientId,
    response
  };

  clients.push(newClient);

  request.on('close', () => {
    console.log(`${clientId} Connection closed`);
    clients = clients.filter(client => client.id !== clientId);
  });
});

app.post('/fact', (req,res) =>{
  const newFact = request.body;
  facts.push(newFact);
  respsonse.json(newFact)
  return clients.forEach(client => client.response.write(`data: ${JSON.stringify(newFact)}\n\n`))
});


const PORT = 3000;


app.listen(PORT, () => {
  console.log(`Facts Events service listening at http://localhost:${PORT}`)
})