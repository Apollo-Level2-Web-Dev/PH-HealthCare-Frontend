"use client";

import { Box, Container, Grid, Typography } from "@mui/material";

const Stats = () => {
  return (
    <Container>
      <Box
        sx={{
          backgroundImage: "linear-gradient(45deg,blue, cyan)",
          borderRadius: "20px",
          margin: "50px auto",
        }}
      >
        <Grid container spacing={2} textAlign="center" p={5}>
          <Grid item xs={3}>
            <Typography
              variant="h3"
              component="h1"
              fontWeight={500}
              color="white"
            >
              180+
            </Typography>
            <Typography
              variant="h6"
              component="h1"
              fontWeight={500}
              color="white"
            >
              Expert Doctors
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography
              variant="h3"
              component="h1"
              fontWeight={500}
              color="white"
            >
              26+
            </Typography>
            <Typography
              variant="h6"
              component="h1"
              fontWeight={500}
              color="white"
            >
              Expert Services
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography
              variant="h3"
              component="h1"
              fontWeight={500}
              color="white"
            >
              10K+
            </Typography>
            <Typography
              variant="h6"
              component="h1"
              fontWeight={500}
              color="white"
            >
              Happy Patients
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography
              variant="h3"
              component="h1"
              fontWeight={500}
              color="white"
            >
              150+
            </Typography>
            <Typography
              variant="h6"
              component="h1"
              fontWeight={500}
              color="white"
            >
              Best Award Winners
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Stats;
