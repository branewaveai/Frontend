// Import necessary dependencies
import {
  Card,
  CardContent,
  Typography
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/doctorCard.css";

const HospitalCard = ({hospitalId, image, name, estdYear, location}) => {
  const navigate = useNavigate();

  const handleBookAppointmentClick = () => {
    
    console.log("I'm navigating to appointments");
    navigate(`/doctors/${hospitalId}/appointments`);
  };

  return (
    <Card className="doctor-card" variant="outlined" >
      <div className="doctor-card-image">
        <img src={image} alt="Doctor" className="doctor-image"  />
      </div>
      <CardContent className="doctor-card-details">
        <Typography variant="h6" component="div">
          
          {name}
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          
        ESTD : {" "}
          {estdYear}
          
        </Typography>
        <Typography variant="body2" color="textSecondary" component="div">
          {location}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default HospitalCard;
