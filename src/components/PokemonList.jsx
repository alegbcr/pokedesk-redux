import { Grid } from "@mui/material";
import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemons }) => {
  return (
    <Grid
      item
      sm={12}
      lg={10}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      {pokemons.map((pokemon) => {
        return (
          <PokemonCard
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            image={pokemon.sprites.front_default}
            types={pokemon.types}
            abilities={pokemon.abilities}
            favorite={pokemon.favorite}
          />
        );
      })}
    </Grid>
  );
};

export default PokemonList;
