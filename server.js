const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

let dataStore = [];

app.post('/api/data', (req, res) => {
  const { device_id, pm25, pm10, timestamp } = req.body;

  if (!device_id || !pm25 || !pm10 || !timestamp) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  const newEntry = {
    id: dataStore.length + 1,
    device_id,
    pm25,
    pm10,
    timestamp,
  };

  dataStore.push(newEntry);
  res.status(201).json({ message: 'Data saved', data: newEntry });
});

app.get('/api/data', (req, res) => {
  res.json(dataStore);
});

app.get('/api/data/:id', (req, res) => {
  const entry = dataStore.find(item => item.id === parseInt(req.params.id));
  if (!entry) {
    return res.status(404).json({ message: 'Data not found' });
  }
  res.json(entry);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
