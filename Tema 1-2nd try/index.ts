const fs = require("fs");

//let output = parseInt(number, base).toString(2nd base);

async function baseConverter(input: string, from_base: any, to_base: string) {
  let output = "";
  let to = parseInt(to_base);
  let from = parseInt(from_base);
  if (input !== undefined) {
    if (to >= 2 && to <= 36) {
      output = await parseInt(input, from).toString(to);
    }
  }

  return output;
}

async function main() {
  try {
    console.log("start");

    fs.readFile("./base.csv", "utf8", function read(err: any, data: any) {
      let row = data.split("\n");

      let array = [];
      let start = new Date().getTime();
      for (let i = 0; i < 1000; i++) {
        let elements = row[i].split(",");
        array.push(baseConverter(elements[0], elements[1], elements[2]));
      }
      console.log(array);

      let stop = new Date().getTime();
      console.log(stop - start + "timp");
      // fs.writeFile("./aids.csv", array, (err: any) => {
      //   if (err) throw err;
      // });
    });

    console.log("end");
  } catch (e) {
    console.error(e);
  }
}

main();
