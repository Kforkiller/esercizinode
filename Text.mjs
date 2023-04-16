var figlet = require("figlet");

figlet("Hello Alfio!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});

export default figlet();