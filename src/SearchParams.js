import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import Results from "./Results";
import useDropDown from "./useDropDown";

// two way data binding is not free in React
const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropDown] = useDropDown("Animal", "Dog", ANIMALS);
  const [breed, BreedDropDown, setBreed] = useDropDown("Breed", "", breeds);
  const [pets, setPets] = useState([]);

  async function requestPets() {
    const { animals } = await pet.animals({
      location,
      breed,
      type: animal,
    });

    setPets(animals || []);
  }

  useEffect(() => {
    // runs after the first render
    setBreeds([]);
    setBreed("");

    pet.breeds(animal).then(({ breeds: apiBreeds }) => {
      const breedStrings = apiBreeds.map(({ name }) => name);
      setBreeds(breedStrings);
    }, console.error);
  }, [animal, setBreed, setBreeds]);

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            type="text"
            id="location"
            value={location}
            placeholder="Location"
            onChange={(event) => setLocation(event.target.value)}
          />
        </label>
        <AnimalDropDown />
        <BreedDropDown />
        <button>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
