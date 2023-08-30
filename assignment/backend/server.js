const express = require("express");
const cors = require('cors')

const movie = [
    { "id": 1, "movieName": "OMG2", "rating": "4.9", "releaseddate": "12-8-2023" },
    { "id": 2, "movieName": "OMG3", "rating": "4.9", "releaseddate": "12-8-2023" },
    { "id": 3, "movieName": "OMG4", "rating": "4.9", "releaseddate": "12-8-2023" },
    { "id": 4, "movieName": "OMG12", "rating": "4.9", "releaseddate": "12-8-2023" },
    { "id": 5, "movieName": "OMG5", "rating": "4.9", "releaseddate": "12-8-2023" },
    { "id": 6, "movieName": "OMG6", "rating": "4.9", "releaseddate": "12-8-2023" },
    { "id": 7, "movieName": "OMG7", "rating": "4.9", "releaseddate": "12-8-2023" },
    { "id": 8, "movieName": "OMG8", "rating": "4.9", "releaseddate": "12-8-2023" },
    { "id": 9, "movieName": "OMG9", "rating": "4.9", "releaseddate": "12-8-2023" },
    { "id": 10, "movieName": "OMG10", "rating": "4.9", "releaseddate": "12-8-2023" },
    { "id": 11, "movieName": "OMG11", "rating": "4.9", "releaseddate": "12-8-2023" },
    { "id": 12, "movieName": "OMG12", "rating": "4.9", "releaseddate": "12-8-2023" },
    { "id": 13, "movieName": "OMG13", "rating": "4.9", "releaseddate": "12-8-2023" },
    { "id": 14, "movieName": "OMG14", "rating": "4.9", "releaseddate": "12-8-2023" },
    { "id": 15, "movieName": "OMG15", "rating": "4.9", "releaseddate": "12-8-2023" },
    { "id": 16, "movieName": "OMG16", "rating": "4.9", "releaseddate": "12-8-2023" },
    { "id": 17, "movieName": "OMG17", "rating": "4.9", "releaseddate": "12-8-2023" },
    { "id": 18, "movieName": "OMG18", "rating": "4.9", "releaseddate": "12-8-2023" },
    { "id": 19, "movieName": "OMG19", "rating": "4.9", "releaseddate": "12-8-2023" },
    { "id": 20, "movieName": "OMG20", "rating": "4.9", "releaseddate": "12-8-2023" },
  ]
const app = express();

const PORT = 4001;

app.use(express.json());
app.use(cors())

app.get("/api/movie", (req, res) => {
  res.json(movie);
});
console.log("Dsfds")
app.post("/api/movie", (req, res) => {
  const newMovie = req.body;
  movie.push(newMovie);

  res.json(movie);
});

app.listen(PORT, () => {
  console.log("app is running----", PORT);
});
