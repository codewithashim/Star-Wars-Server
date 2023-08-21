const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const port = 5000;

///////////////////////////////////////////////
//                Middilware                 //
/////////////////////////////////////////////*/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const CharacterRouter = require("./Router/CharacterRouter");

///////         End of Middilware      ////////

///////////////////////////////////////////////
//               Add New Data               //
/////////////////////////////////////////////*/

app.use("/api/v1", CharacterRouter);

app.get("/api/v1", (req, res) => {
    res.send("Hey Wellcome Our Server!");
});

app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});

module.exports = app;
