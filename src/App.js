import React, { useState } from "react";
import "./styles.css";
import almond from "../img/Fiction/almond.jpeg";
import harryPotter from "../img/Fiction/harry_potter.jpeg";
import wanderer from "../img/Fiction/wanderers.jpeg";
import atomicHabits from "../img/Self-Help/atomic_habits.jpeg";
import ikigai from "../img/Self-Help/ikigai.jpeg";
import sapiens from "../img/Non-Fiction/sapiens.jpeg";
import homoDeus from "../img/Non-Fiction/homo_deus.jpeg";
import animalFarm from "../img/Fiction/animal_farm.jpeg";
import killMocking from "../img/Fiction/kill_mocking.jpeg";
import outliers from "../img/Self-Help/outliers.jpeg";
import richDad from "../img/Self-Help/rich_dad.jpeg";
import tagr from "../img/Self-Help/tagr.jpg";

const bookList = {
  Fiction: [
    { name: "Almond", rating: 3.5, img: almond },
    {
      name: "Harry Potter and the Philosopher's stone",
      rating: 4.5,
      img: harryPotter
    },
    { name: "Wanderers", rating: 3.5, img: wanderer },
    { name: "Animal Farm", rating: 4.2, img: animalFarm },
    { name: "To kill a mocking bird", rating: 4, img: killMocking }
  ],
  "Self-Help": [
    {
      name: "Atomic Habits",
      rating: 4.4,
      img: atomicHabits
    },
    { name: "Ikigai", rating: 4.5, img: ikigai },
    { name: "Outliers", rating: 4.3, img: outliers },
    { name: "Rich Dad Poor Dad", rating: 4.4, img: richDad },
    { name: "THink Rich Grow Rich", rating: 4.3, img: tagr }
  ],
  "Non-Fiction": [
    { name: "Sapiens", rating: 4.5, img: sapiens },
    { name: "Homo Deus", rating: 4.2, img: homoDeus }
  ]
};

const genreList = Object.keys(bookList);

export default function App() {
  const [genreSelected, setGenreSelected] = useState("Fiction");

  function genreClickHandler(genre) {
    setGenreSelected(genre);
  }

  function renderBook(bookObj) {
    var img = bookObj.img;
    return (
      <div key={bookObj.name} className="book-item">
        <img className="zoom" src={img} alt="" />
      </div>
    );
  }

  return (
    <main className="center-container">
      <h2 className="genre-heading">
        Browse <i className="fa fa-angle-right" aria-hidden="true"></i> Genres
      </h2>
      <div className="genre-list">
        {genreList.map((genre) => {
          return (
            <button
              key={genre}
              onClick={() => genreClickHandler(genre)}
              className="genre-item"
            >
              {genre}
            </button>
          );
        })}
      </div>
      <hr />
      <div className="genre-books">
        {bookList[genreSelected].map((bookObj) => renderBook(bookObj))}
      </div>
    </main>
  );
}
