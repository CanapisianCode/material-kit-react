import React, { useState } from "react";
import PropTypes from "prop-types";
import { Typography, Grid, Box } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../components/RPCGComponents/CardComponent.css";

const CardComponent = ({ card }) => {
  const [currentSide, setCurrentSide] = useState("card-front");

  const handleSideChange = (side) => {
    setCurrentSide(side);
  };

  const renderContent = () => {
    switch (currentSide) {
      case "card-basic-info":
        return (
          <Box>
            <Typography variant="h6">Basic Info</Typography>
            <div>Affiliation: {card.Affiliation}</div>
            <div>Origin: {card.Origin}</div>
            <div>Era: {card.Era}</div>
            <div>Card ID: {card.CardId}</div>
          </Box>
        );

      case "card-abilities":
        return (
          <Box>
            <Typography variant="h6">Abilities</Typography>
            <div>Special Abilities: {card.SpecialAbilities}</div>
            <div>Skills: {card.Skills}</div>
            <div>Abilities: {card.Abilities}</div>
            <div>Constraints: {card.Constraints}</div>
          </Box>
        );

      case "card-additional-attributes":
        return (
          <Box>
            <Typography variant="h6">Additional Attributes</Typography>
            <div>Buff/Debuff: {card.BuffDebuff}</div>
            <div>Species: {card.Species}</div>
            <div>Resistances: {card.Resistances}</div>
            <div>Magic Type: {card.MagicType}</div>
            <div>Physical Type: {card.PhysicalType}</div>
            <div>Card Type: {card.CardType}</div>
            <div>Owned: {card.Owned ? 1 : 0}</div>
            <div>Attack Speed: {card.AttackSpeed}</div>
            <div>Card Recovery: {card.CardRecovery}</div>
          </Box>
        );

      default:
        return (
          <Grid container className="front-stats">
            <Grid item xs={4} className="health">
              1000 {card.Health}
            </Grid>
            <Grid item xs={4} className="defense">
              200 {card.Defense}
            </Grid>
            <Grid item xs={4} className="attack">
              420 {card.Attack}
            </Grid>
            <Grid item xs={4} className="charisma">
              50 {card.Charisma}
            </Grid>
            <Grid item xs={4} className="cost">
              3 {card.Cost}
            </Grid>
            <Grid item xs={4} className="energy">
              2 {card.Energy}
            </Grid>
            <Grid item xs={4} className="crit">
              15% {card.Crit}
            </Grid>
          </Grid>
        );
    }
  };

  return (
    <>
      <div className="card-header">
        <Typography variant="h5">Name: {card.CardName}</Typography>
        <div className="image-container">
          <img src={card.CardPicture} alt={card.CardName} className="card-image" />
        </div>
      </div>
      <div className="card-body">{renderContent()}</div>
      <div className="card-footer button-container">
        <button className="button" onClick={() => handleSideChange("card-front")}>
          Front
        </button>
        <button className="button" onClick={() => handleSideChange("card-basic-info")}>
          Basic Info
        </button>
        <button className="button" onClick={() => handleSideChange("card-abilities")}>
          Abilities
        </button>
        <button className="button" onClick={() => handleSideChange("card-additional-attributes")}>
          Additional Attributes
        </button>
      </div>
    </>
  );
};

CardComponent.propTypes = {
  card: PropTypes.shape({
    DatabaseId: PropTypes.number.isRequired,
    CardId: PropTypes.number.isRequired,
    CardName: PropTypes.string.isRequired,
    CardPicture: PropTypes.string.isRequired,
    Health: PropTypes.number.isRequired,
    Defense: PropTypes.number.isRequired,
    Attack: PropTypes.number.isRequired,
    Affiliation: PropTypes.string.isRequired,
    Origin: PropTypes.string.isRequired,
    AttackSpeed: PropTypes.number.isRequired,
    Skills: PropTypes.string.isRequired,
    Era: PropTypes.string.isRequired,
    SpecialAbilities: PropTypes.string.isRequired,
    CardRecovery: PropTypes.number.isRequired,
    Abilities: PropTypes.string.isRequired,
    Constraints: PropTypes.string.isRequired,
    BuffDebuff: PropTypes.string.isRequired,
    Energy: PropTypes.string.isRequired,
    Species: PropTypes.string.isRequired,
    Resistances: PropTypes.string.isRequired,
    MagicType: PropTypes.string.isRequired,
    PhysicalType: PropTypes.string.isRequired,
    Crit: PropTypes.string.isRequired,
    Charisma: PropTypes.string.isRequired,
    Cost: PropTypes.number.isRequired,
    CardType: PropTypes.string.isRequired,
    Owned: PropTypes.bool.isRequired,
  }).isRequired,
};

export default CardComponent;
