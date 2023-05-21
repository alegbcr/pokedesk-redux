import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
// Data
import { fetchPokemonsWithDeatails } from "./slices/dataSlice";

// Components
import { CircularProgress, Container, Grid, TextField } from "@mui/material";
import PokemonList from "./components/PokemonList";
// icons
import SearchIcon from "@mui/icons-material/Search";

function App() {
  const pokemons = useSelector((state) => state.data.pokemons, shallowEqual);
  const loading = useSelector((state) => state.ui.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonsWithDeatails());
  }, []);

  return (
    <>
      <Grid container direction="row" justifyContent="center" marginTop="3rem">
        <Grid
          item
          xs={6}
          md={6}
          lg={6}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <TextField fullWidth size="small" placeholder="Buscar..." />
          <SearchIcon
            sx={{
              borderRadius: "0px 5px 5px 0px",
              border: "1px solid gray",
              borderLeft: "none",
              padding: "7px",
            }}
          />
        </Grid>
      </Grid>
      <Grid container direction="row" justifyContent="center" marginTop="2rem">
        {loading ? (
          <Container
            sx={{
              width: "100vw",
              height: "80vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircularProgress disableShrink />
          </Container>
        ) : (
          <PokemonList pokemons={pokemons} />
        )}
      </Grid>
    </>
  );
}

export default App;
