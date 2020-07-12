import React, { useState, useEffect, Fragment } from "react";
import Header from "./Components/Header";
import Form from "./Components/Form";
import PokeCard from "./Components/PokeCard";

const API_CALL = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=20";

const App = () => {
  const [pokemon, setPokemon] = useState("");
  const [next, setNext] = useState("");
  const [previous, setPrevious] = useState("");
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    async function getPokemon() {
      const response = await fetch(API_CALL);
      const json = response.json();
      return json;
    }
    getPokemon().then((data) => {
      setNext(data.next);
      setPrevious(data.previous);
      setPokemons(data.results);
    });
  }, []);
  return (
    <Fragment>
      <Header />
      <Form />
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-10 ">
            {pokemons.map((result,index) => (
              <PokeCard key={index} url={result.url} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default App;
