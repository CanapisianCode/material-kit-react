import React from "react";
import "../../components/RPCGComponents/CardComponent.css";
import CardBoard from "../../components/RPCGComponents/RPCGBoard";
import use3DEffect from "../../components/RPCGComponents/use3dEffect.js";

const RPCGPage = () => {
  use3DEffect();

  return (
    <div className="card-page">
      <CardBoard />
      <div className="screen-stats-container">
        <div>Width: 2208</div>
        <div>Height: 793</div>
        <div>Half Width: {2208 / 2}</div>
        <div>Half Height: {793 / 2}</div>
        <div>
          Center: {2208 / 2}, {793 / 2}
        </div>
      </div>
    </div>
  );
};

export default RPCGPage;
