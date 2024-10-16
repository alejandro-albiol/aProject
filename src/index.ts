import express from "express";

const app = express();
const port = 3000;

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('<h1>Hello, World!</h1>');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});