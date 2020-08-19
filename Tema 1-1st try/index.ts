import fs, { writeFile } from "fs";

fs.readFile("./base.csv", "utf8", (err, data) => {
  let a = data.split("\n");
  //console.log(a);

  for (let i = 0; i < 10000; i++) {
    let b = a[i].split(",");
    //console.log(b);
    let aids = parseInt(b[0], Number(b[1])).toString(Number(b[2]));
    //console.log(aids);

    // let log = fs.createWriteStream("./aids.csv");
    // log.write(aids.toString());
    // log.end();

    fs.appendFile("./aids.csv", "\n" + aids, function (err) {
      if (err) return console.log(err);
      //	console.log('i have aids');
    });
  }
  console.log("finished");
});
