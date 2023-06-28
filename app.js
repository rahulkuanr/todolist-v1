const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  let dayInNumber = new Date().getDay();
  let day = "";

  switch (dayInNumber) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thrusday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
    default:
      break;
  }
  // res.render("list", { day: day }); ----> can also be written like this
  res.render("list", { day });
});

app.listen(3000, () => {
  console.log("Server started on port 3000.");
});
