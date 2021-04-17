import express from 'express';
const app = express();
const port = 5000;

function home(req, res) {
  res.status(200).json({
    name: 'Yurii',
    age: '26',
    id: '1234',
  });
}

function info(req, res) {
  const a = 123;
  const b = Math.random();
  const c = a + b;
  res.status(200).json('Info HERE!!!' + c);
}

function apiNotFound(req, res) {
  return res.status(400).json('API not found!');
}

app.get('/', home);
app.post('/info', info);
app.use(apiNotFound);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
