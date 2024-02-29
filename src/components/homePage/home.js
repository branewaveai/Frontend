// pages/index.js
import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import backgroundImage from "../../assets/icons/Bg1.png";
import DoctorList from "../../pages/doctorsList";
import Footer from "../../pages/footer";
import HospiList from "../hospital/hospiCardList";
import Feature from "./Features";
import "./StyleHome/home.css";
import Blogs from "./blogsContent";
import SearchBar from "./serchBar";
import Testimonials from "./testimonials";
import TopPage from "./topPage";
import Treatment from "./treatments";
const Home = () => {
  return (
    <>
      <div
        className="background"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
        }}
      ></div>
      <Container className="container">
        <div style={{ maxWidth: "60%", margin: "0 auto", marginTop: "100px" }}>
          
        </div>
        {/* <SearchBar /> */}
        <Grid container spacing={2}>
          <Grid item xs={12}></Grid>
        </Grid>
        <TopPage />
      </Container>
      <Feature />
      <Treatment />
      <div
        style={{
          backgroundColor: "#F3FDF7",
          justifyContent: "center",
          margin: "0 auto",
        }}
      >
        <div style={{ width: "80%", margin: "0 auto" }}>
          <Typography variant="h4"> Our Team of Expert Doctors </Typography>
          <DoctorList doctorsToShowPerPage={4} />
        </div>
      </div>
      <div className="content-wrapper">
        <Grid container spacing={1} style={{ marginBottom: "100px" }}>
          {/*<Grid item xs={12}>
            <Typography variant="h4"> Our Team of Expert Doctors </Typography>
            <DoctorList doctorsToShowPerPage={4} />
          </Grid>*/}
          <Grid item xs={12}>
            <Typography variant="h4"> Our Hospitals </Typography>
            <HospiList doctorsToShowPerPage={4} />
          </Grid>
        </Grid>
        <Blogs />
        <Testimonials />
      </div>
      <Footer />
    </>
  );
};

export default Home;
