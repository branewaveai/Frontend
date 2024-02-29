import { CurrencyRupee } from "@mui/icons-material";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import ExperienceIcon from "@mui/icons-material/Star";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const AboutCard = ({ doctor, onEnquiryClick }) => {
  const { doctorId, name, image, exp, degree, patientsConsulted } = doctor;
  const navigate = useNavigate();

  const handleBookAppointmentClick = () => {
    // Navigate to the appointment page for the specific doctor
    console.log("I'm navigating to appointments");
    // navigate(`/doctors/${doctorId}/appointments`);
  };

  const handleEnquiryClick = () => {
    onEnquiryClick();
  };

  return (
    <Card
      style={{
        backgroundColor: "white",
        borderRadius: 16,
        overflow: "hidden",
      }}
    >
      <Grid container spacing={4}>
        <Grid item xs={12} sm={2}>
          <CardMedia
            component="img"
            alt={name}
            height={300}
            sx={{
              display: "flex",
              marginLeft: 2,
              marginRight: "auto",
              maxWidth: 300,
              objectFit: "cover",
              marginTop: 2,
              marginBottom: 2,
              borderRadius: 4,
            }}
            image={image}
          />
        </Grid>
        <Grid item xs={8} sm={10}>
          <CardContent>
            <Typography variant="h4"> {name} </Typography>
            <Typography variant="h6" color="textSecondary" paragraph my={1}>
              Neurolgist
            </Typography>
            <Typography variant="body2" color="textSecondary" paragraph>
              {degree}
            </Typography>
            <div
              style={{
                display: "flex",
                alignItems: "left",
                marginBottom: 10,
                backgroundColor: "white",
              }}
            >
              <LocalHospitalIcon color="primary" />
              <Typography
                variant="body1"
                color="textSecondary"
                style={{ marginLeft: 5 }}
              >
                Fortis Hospital, Bangalore
              </Typography>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "left",
                marginBottom: 10,
                backgroundColor: "white",
              }}
            >
              <ExperienceIcon color="primary" />
              <Typography
                variant="body1"
                color="textSecondary"
                style={{ marginLeft: 5 }}
              >
                {`${exp} years of experience`}
              </Typography>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <CurrencyRupee color="primary" />
              <Typography
                variant="body1"
                color="black"
                style={{ marginLeft: 5 }}
              >
                <b> 2000 </b> for Video consultation
              </Typography>
            </div>
          </CardContent>
          <Grid container spacing={2} justifyContent="left">
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                onClick={handleEnquiryClick}
              >
                Book Appointment
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};

export default AboutCard;
