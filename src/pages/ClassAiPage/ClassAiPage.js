import React from "react";
import MKBox from "components/MKBox";
import ClassAiForm from "pages/ClassAiPage/ClassAiForm";
import bgImage from "assets/images/bg-sign-in-basic.jpeg";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

const ClassAiPage = () => {
  return (
    <>
      <MKBox
        position="absolute"
        top={0}
        left={0}
        zIndex={1}
        width="100%"
        minHeight="100vh"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          "&:before": {
            content: '""',
            display: "block",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.6)",
            zIndex: -1,
          },
        }}
      >
        <MKBox p={{ xs: 4, md: 6 }}>
          <Grid container justifyContent="center">
            <Grid item xs={12} sm={8} md={6} lg={8}>
              <Card sx={{ p: 3 }}>
                <ClassAiForm />
              </Card>
            </Grid>
          </Grid>
        </MKBox>
      </MKBox>
    </>
  );
};

export default ClassAiPage;
