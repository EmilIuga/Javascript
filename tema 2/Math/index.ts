import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/sum/:nr1/:nr2", (request, response) => {
  let nr1 = parseInt(`${request.params.nr1}`);
  let nr2 = parseInt(`${request.params.nr2}`);
  let sum = nr1 + nr2;
  response.send(`nr1+nr2= ${sum}`);
});

app.get("/substraction/:nr1/:nr2", (request, response) => {
  let nr1 = parseInt(`${request.params.nr1}`);
  let nr2 = parseInt(`${request.params.nr2}`);
  let substraction = nr1 - nr2;
  response.send(`nr1-nr2= ${substraction}`);
});

app.get("/mult/:nr1/:nr2", (request, response) => {
  let nr1 = parseInt(`${request.params.nr1}`);
  let nr2 = parseInt(`${request.params.nr2}`);
  let mult = nr1 * nr2;
  response.send(`nr1*nr2= ${mult}`);
});

app.get("/div/:nr1/:nr2", (request, response) => {
  let nr1 = parseInt(`${request.params.nr1}`);
  let nr2 = parseInt(`${request.params.nr2}`);
  let div = nr1 / nr2;
  response.send(`nr1*nr2= ${div}`);
});

app.post("/power", (request, response) => {
  let nr = {
    nr1: request.body.nr1 ? request.body.nr1 : "N/A",
    nr2: request.body.nr2 ? request.body.nr2 : "N/A",
  };
  let a = Math.pow(nr.nr1, nr.nr2);
  response.json(`nr1^nr2= ${a}`);
});
app.post("/root", (request, response) => {
  let nr = {
    nr1: request.body.nr1 ? request.body.nr1 : "N/A",
  };
  let a = Math.sqrt(nr.nr1);
  response.json(`sqrt nr 1 = ${a}`);
});

app.post("/round", (request, response) => {
  let nr = {
    nr1: request.body.nr1 ? request.body.nr1 : "N/A",
  };
  let a = Math.round(nr.nr1);
  response.json(`round nr 1 =  ${a}`);
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
