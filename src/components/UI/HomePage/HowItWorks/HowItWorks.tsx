"use client";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import femaleDocImg from "@/assets/how-it-works-img.png";
import searchIcon from "@/assets/icons/search-icon.png";
import doctorIcon from "@/assets/icons/doctor-icon.png";
import appointmentIcon from "@/assets/icons/appointment-icon.png";
import charityIcon from "@/assets/icons/charity-icon.png";

const HowItWorks = () => {
  return (
    <Container>
      <Box my={10}>
        <Box>
          <Typography
            component="p"
            fontSize={20}
            fontWeight={400}
            color="#1586FD"
            sx={{ mb: 1.3 }}
          >
            How it Works
          </Typography>
          <Typography variant="h4" component="h1" fontWeight={600}>
            4 Easy Steps to Get Your Solution
          </Typography>
          <Typography
            component="p"
            fontSize={18}
            fontWeight={400}
            sx={{ mt: 2 }}
          >
            Access to expert physicians and surgeons, advanced technologies
          </Typography>
          <Typography component="p" fontSize={18} fontWeight={400}>
            and top-quality surgery facilities right here.
          </Typography>
        </Box>
        <Box>
          <Grid container spacing={2} mt={5}>
            <Grid item xs={6}>
              <Image src={femaleDocImg} alt="doctor image" />
            </Grid>
            <Grid item xs={6}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Box
                    sx={{
                      backgroundColor: "#fff",
                      border: "1px solid lightgray",
                      borderRadius: "10px",
                      padding: "20px",
                    }}
                  >
                    <Image src={searchIcon} alt="search-icon" />
                    <Typography
                      variant="h6"
                      component="h2"
                      fontWeight={500}
                      mt={3}
                    >
                      Search Doctor
                    </Typography>
                    <Typography
                      component="p"
                      fontSize={14}
                      fontWeight={400}
                      sx={{ mt: 1 }}
                    >
                      Dolor sit amet consectetur. Scelerisque in eu mauris
                      volutpat Ornare .
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box
                    sx={{
                      backgroundColor: "#fff",
                      border: "1px solid lightgray",
                      borderRadius: "10px",
                      padding: "20px",
                    }}
                  >
                    <Image src={doctorIcon} alt="search-icon" />
                    <Typography
                      variant="h6"
                      component="h2"
                      fontWeight={500}
                      mt={3}
                    >
                      Check Doctor Profile
                    </Typography>
                    <Typography
                      component="p"
                      fontSize={14}
                      fontWeight={400}
                      sx={{ mt: 1 }}
                    >
                      Dolor sit amet consectetur. Scelerisque in eu mauris
                      volutpat Ornare .
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box
                    sx={{
                      backgroundColor: "#fff",
                      border: "1px solid lightgray",
                      borderRadius: "10px",
                      padding: "20px",
                    }}
                  >
                    <Image src={appointmentIcon} alt="search-icon" />
                    <Typography
                      variant="h6"
                      component="h2"
                      fontWeight={500}
                      mt={3}
                    >
                      Schedule Appointment
                    </Typography>
                    <Typography
                      component="p"
                      fontSize={14}
                      fontWeight={400}
                      sx={{ mt: 1 }}
                    >
                      Dolor sit amet consectetur. Scelerisque in eu mauris
                      volutpat Ornare .
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box
                    sx={{
                      backgroundColor: "#fff",
                      border: "1px solid lightgray",
                      borderRadius: "10px",
                      padding: "20px",
                    }}
                  >
                    <Image src={charityIcon} alt="search-icon" />
                    <Typography
                      variant="h6"
                      component="h2"
                      fontWeight={500}
                      mt={3}
                    >
                      Get Your Solution
                    </Typography>
                    <Typography
                      component="p"
                      fontSize={14}
                      fontWeight={400}
                      sx={{ mt: 1 }}
                    >
                      Dolor sit amet consectetur. Scelerisque in eu mauris
                      volutpat Ornare .
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default HowItWorks;
