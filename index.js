const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");

app.use(express.urlencoded({ extended: false }));

app.get("/api", (req, res) => {
  fs.readFile("MOCK_DATA.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Error reading the file.");
    }
    try {
      const jsonData = JSON.parse(data);
      res.json(jsonData);
    } catch (parseError) {
      console.error(parseError);
      res.status(500).send("Error parsing JSON data.");
    }
  });
});

// app.get("/", (req, res) => {
//   fs.readFile("MOCK_DATA.json", "utf8", (err, data) => {
//     if (err) {
//       console.error(err);
//       return res.status(500).send("Error reading the file.");
//     }
//     try {
//       const jsonData = JSON.parse(data);

//       let htmlContent = "<ul>";
//       jsonData.map((value) => {
//         htmlContent += `<li>${value.first_name}</li>`;
//       });
//       htmlContent += "</ul>";

//       res.send(htmlContent);
//     } catch (parseError) {
//       console.error(parseError);
//       res.status(500).send("Error parsing JSON data.");
//     }
//   });
// });

app.get("/test", (req, res) => {
  res.send("This is a test page");
});

app.get("/test/:id", (req, res) => {
  const id = req.params.id;
  console.log(req.headers);
  res.send(`This is a test page and id is ${id}`);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}.`);
});

app.post("/add", (req, res) => {
  const { a, b } = req.body;
  console.log(parseInt(a) + parseInt(b));
  res.send({ result: parseInt(a) + parseInt(b) });
});
