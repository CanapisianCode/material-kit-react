//import React, { useState } from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";
import MKBox from "components/MKBox";
//import cardEndpoints from "../../axios/RPCGEndpoints";
import CardService from "../../axios/RPCGServiceFile";

const ListCards = () => {
  return (
    <MKBox p={{ width: "100%" }}>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={8} md={6} lg={4}>
          <Card sx={{ p: 1 }}>
            <MKBox mb={3} display="flex" justifyContent="center">
              <MKTypography variant="h5">RolePlayingCardGame</MKTypography>
            </MKBox>
            <MKButton
              type="button"
              variant="contained"
              color="primary"
              onClick={CardService.getAllCards}
              align="center"
            >
              Command
            </MKButton>
          </Card>
        </Grid>
      </Grid>
      {/* Optionally display the fetched cards */}
      {/* <Grid container spacing={2} mt={2}>
        {cards.map((card, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card>
              <MKTypography variant="body1">{card.name}</MKTypography>
              {/* Display other card details here 
            </Card>
          </Grid>
        ))}
      </Grid> */}
    </MKBox>
  );
};

export default ListCards;
