import fetch from "node-fetch";
import { Console } from "console";

const sumURL = "http://localhost:8080/sum/43/43";
const subsURL = "http://localhost:8080/substraction/6/66";
const multURL = "http://localhost:8080/mult/6/4";
const divURL = "http://localhost:8080/div/5/7";

fetch(sumURL)
  .then((body) => body.json())
  .then((json) => console.log("sum") + json);

fetch(subsURL)
  .then((body) => body.json())
  .then((json) => console.log("subs") + json);

fetch(multURL)
  .then((body) => body.json())
  .then((json) => console.log("mult") + json);

fetch(divURL)
  .then((body) => body.json())
  .then((json) => console.log("div") + json);
