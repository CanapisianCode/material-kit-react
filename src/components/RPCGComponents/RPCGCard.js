import React, { useState } from "react";
import PropTypes from "prop-types";
import { Typography, Box } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";

const CardComponent = ({ card }) => {
  const [currentSide, setCurrentSide] = useState("card-front");
  const [cardState] = useState({
    DatabaseId: card.DatabaseId,
    CardId: card.CardId,
    CardName: card.CardName,
    CardPicture: card.CardPicture,
    Health: card.Health,
    Defense: card.Defense,
    Attack: card.Attack,
    Affiliation: card.Affiliation,
    Origin: card.Origin,
    AttackSpeed: card.AttackSpeed,
    Skills: card.Skills,
    Era: card.Era,
    SpecialAbilities: card.SpecialAbilities,
    CardRecovery: card.CardRecovery,
    Abilities: card.Abilities,
    Constraints: card.Constraints,
    BuffDebuff: card.BuffDebuff,
    Energy: card.Energy,
    Species: card.Species,
    Resistances: card.Resistances,
    MagicType: card.MagicType,
    PhysicalType: card.PhysicalType,
    Crit: card.Crit,
    Charisma: card.Charisma,
    Cost: card.Cost,
    CardType: card.CardType,
    Owned: card.Owned,
  });

  const handleSideChange = (side) => {
    setCurrentSide(side);
  };

  const renderContent = () => {
    switch (currentSide) {
      case "card-basic-info":
        return (
          <Box>
            <Typography variant="h6">Basic Info</Typography>
            <div>Affiliation: {cardState.Affiliation}</div>
            <div>Origin: {cardState.Origin}</div>
            <div>Era: {cardState.Era}</div>
            <div>Card ID: {cardState.CardId}</div>
          </Box>
        );

      case "card-abilities":
        return (
          <Box>
            <Typography variant="h6">Abilities</Typography>
            <div>Special Abilities: {cardState.SpecialAbilities}</div>
            <div>Skills: {cardState.Skills}</div>
            <div>Abilities: {cardState.Abilities}</div>
            <div>Constraints: {cardState.Constraints}</div>
          </Box>
        );

      case "card-additional-attributes":
        return (
          <Box>
            <Typography variant="h6">Additional Attributes</Typography>
            <div>Buff/Debuff: {cardState.BuffDebuff}</div>
            <div>Species: {cardState.Species}</div>
            <div>Resistances: {cardState.Resistances}</div>
            <div>Magic Type: {cardState.MagicType}</div>
            <div>Physical Type: {cardState.PhysicalType}</div>
            <div>Card Type: {cardState.CardType}</div>
            <div>Owned: {cardState.Owned ? 1 : 0}</div>
            <div>Attack Speed: {cardState.AttackSpeed}</div>
            <div>Card Recovery: {cardState.CardRecovery}</div>
          </Box>
        );

      default:
        return (
          <>
            <div className="health">{cardState.Health}</div>
            <div className="defense">{cardState.Defense}</div>
            <div className="attack">{cardState.Attack}</div>
            <div className="charisma">{cardState.Charisma}</div>
            <div className="energy">{cardState.Energy}</div>
            <div className="crit">{cardState.Crit}</div>
          </>
        );
    }
  };

  return (
    <>
      <div className="card-header">
        <Typography className="card-name">{cardState.CardName}</Typography>
        <div className="cost">{cardState.Cost}</div>
      </div>
      <div className="image-container">
        <img src={cardState.CardPicture} alt={cardState.CardName} className="card-image" />
      </div>
      <div className="card-body">{renderContent()}</div>
      <div className="card-footer">
        <button className="button" onClick={() => handleSideChange("card-front")}>
          <div className="popup">Front</div>
        </button>
        <button className="button" onClick={() => handleSideChange("card-basic-info")}>
          <div className="popup">Basic Info</div>
        </button>
        <button className="button" onClick={() => handleSideChange("card-abilities")}>
          <div className="popup">Abilities</div>
        </button>
        <button className="button" onClick={() => handleSideChange("card-additional-attributes")}>
          <div className="popup">Additional Attributes</div>
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
  category: PropTypes.string.isRequired,
};

export default CardComponent;
