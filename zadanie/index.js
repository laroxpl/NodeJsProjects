const fs = require("fs");
const path = require("path");

function saveData(sourceDir, directoryP, exist)
fs.mkdir(path.join(__dirname, directoryP), function (err) {
  if (err) {
    if (err.code === "EEXIST") {
      console.log("Folder juz istnieje");
      return;
    }
    console.log(err);
  } else {
    console.log("Stworzono folder");
  }
});
fs.readFile(
  path.join(sourceDir, "2-read-write-users.json"),
  "utf-8",
  function (err, data) {
    if (err) console.log(err);
    else {
      let users = JSON.parse(data);

      for (let user of users) {
        let fileName = user.id + "-" + user.name + ".txt";
        let id = user.id;
        let name = user.name.split(" ")[0];
        let surname = user.name.split(" ")[1];
        let phoneNumber = user.phone.split(" ")[0];
        let street = user.address.street;
        let zipCode = user.address.zipcode;
        let city = user.address.city;
      }
    }
  }
);

function ifExist() {
  if (err.code === "ENOENT") {
    exist = false;
  } else {
    exist = true;
  }
  if (exist === false) {
    fs.writeFile(
      path.join(__dirname, "people", fileName),
      `name: ${name},\nsurname: ${surname},\nstreet: ${street},\nZip Code: ${zipCode},\nCity: ${city}\nphone number: ${phoneNumber}`,
      function (err) {}
    );
    console.log("plik zostal stworzony");
  }
}

// fs.writeFile(
//   path.join(__dirname, "people", fileName),
//   `name: ${name},\nsurname: ${surname},\nstreet: ${street},\nZip Code: ${zipCode},\nCity: ${city}\nphone number: ${phoneNumber}`,
//   function (err) {}
// );
