import express from 'express';

const app: express.Application = express();
const port = 3000;

app.listen(port, () => {
  console.log(`server is listening on ${port}`);
});

app.use(express.json());

// Homepage
app.get('/', (req: express.Request, res: express.Response) => {
  res.status(200).send("<h1>Welcome to my compute React app!</h1>");
});

// Middleware that returns JSON response
app.get('/json', (req: express.Request, res: express.Response) => {
  res.status(200).json({ message: 'Hello World!' });
});

// Middleware that returns HTML response
app.get('/html', (req: express.Request, res: express.Response) => {
  res.status(200).send('<h1>Hello World!</h1>');
});

// Middleware that returns text response
app.get('/text', (req: express.Request, res: express.Response) => {
  res.status(200).send('Hello World!');
});

// Middleware that returns status code 400
app.get('/status-400', (req: express.Request, res: express.Response) => {
  res.sendStatus(400);
});

// Middleware that sets custom headers
app.get('/header', (req: express.Request, res: express.Response) => {
  res.set('x-my-header', 'my-header');
  res.status(200).send('Check the response headers in the Network tab!');
});

// Middleware that sets cache-control header
app.get('/cache-control', (req: express.Request, res: express.Response) => {
  res.set('Cache-Control', `public, max-age=0`);
  res.status(200).send('Hello World!');
});