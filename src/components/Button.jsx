import StarIcon from "@mui/icons-material/Star";

const Button = ({ isFavorite, onClickFavorite }) => {
  const color = isFavorite ? "green" : "gray";
  return <StarIcon onClick={onClickFavorite} sx={{ color: `${color}` }} />;
};

export default Button;
