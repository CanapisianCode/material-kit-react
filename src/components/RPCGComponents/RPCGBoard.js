// import React, { useState } from "react";
// //import PropTypes from "prop-types";
// //import { Typography, Grid, Box } from "@mui/material";
// import RenderCards from "./RPCGRenderCards";

// const CardBoard = () => {
//   //const [currentSide, setCurrentSide] = useState("card-front");

//   // const handleSideChange = (side) => {
//   //   setCurrentSide(side);
//   // };

//   return (
//     <div><RenderCards/></div>
//   );
// };

// // CardComponent.propTypes = {
// //   card: PropTypes.shape({
// //     DatabaseId: PropTypes.number.isRequired,
// //     CardId: PropTypes.number.isRequired,
// //     CardName: PropTypes.string.isRequired,
// //     CardPicture: PropTypes.string.isRequired,
// //     Health: PropTypes.number.isRequired,
// //     Defense: PropTypes.number.isRequired,
// //     Attack: PropTypes.number.isRequired,
// //     Affiliation: PropTypes.string.isRequired,
// //     Origin: PropTypes.string.isRequired,
// //     AttackSpeed: PropTypes.number.isRequired,
// //     Skills: PropTypes.string.isRequired,
// //     Era: PropTypes.string.isRequired,
// //     SpecialAbilities: PropTypes.string.isRequired,
// //     CardRecovery: PropTypes.number.isRequired,
// //     Abilities: PropTypes.string.isRequired,
// //     Constraints: PropTypes.string.isRequired,
// //     BuffDebuff: PropTypes.string.isRequired,
// //     Energy: PropTypes.string.isRequired,
// //     Species: PropTypes.string.isRequired,
// //     Resistances: PropTypes.string.isRequired,
// //     MagicType: PropTypes.string.isRequired,
// //     PhysicalType: PropTypes.string.isRequired,
// //     Crit: PropTypes.string.isRequired,
// //     Charisma: PropTypes.string.isRequired,
// //     Cost: PropTypes.number.isRequired,
// //     CardType: PropTypes.string.isRequired,
// //     Owned: PropTypes.bool.isRequired,
// //   }).isRequired,
// //   category: PropTypes.string.isRequired,
// //};

// export default CardComponent;

import React from "react";
import RenderCards from "./RPCGRenderCards";
import "./CardComponent.css";

const CardBoard = () => {
  return (
    <div className="card-board">
      <div className="rotated-cards">
        <RenderCards className="rotated-cards" />
      </div>
      <div className="player-cards">
        <RenderCards />
      </div>
    </div>
  );
};

export default CardBoard;
