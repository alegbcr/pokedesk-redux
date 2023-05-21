import {
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import { useDispatch } from "react-redux";
import { setFavorite } from "../slices/dataSlice";
import Button from "./Button";

const PokemonCard = ({ id, name, image, types, abilities, favorite }) => {
  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(setFavorite({ pokemonId: id }));
  };

  return (
    <Card sx={{ width: "200px", margin: ".5rem" }}>
      <CardMedia sx={{ height: 180 }} image={image} alt={name} />
      <CardContent>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography gutterBottom sx={{ margin: "0" }} variant="h6">
            {name}
          </Typography>
          <IconButton>
            <Button isFavorite={favorite} onClickFavorite={handleOnClick} />
          </IconButton>
        </Stack>

        <Typography variant="body2" color="text.secondary">
          {renderTypes(types)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {renderAbilities(abilities)}
        </Typography>
      </CardContent>
    </Card>
  );
};

const renderTypes = (types) => {
  return types.map((type) => type.type.name).join(", ");
};

const renderAbilities = (abilities) => {
  return abilities.map((ability) => ability.ability.name).join(", ");
};

export default PokemonCard;
