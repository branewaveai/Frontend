// Import necessary dependencies
import VideoCallIcon from "@mui/icons-material/VideoCall";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/doctorCard.css";

// Define the DoctorCard component
const DoctorCard = ({ doctorId, image, name, exp, degree, location }) => {
  const navigate = useNavigate();

  // This function will be called when the "Book Appointment" button is clicked
  const handleBookAppointmentClick = () => {
    // Navigate to the appointment page for the specific doctor
    console.log("I'm navigating to appointments");
    navigate(`/doctors/${doctorId}/appointments`);
  };

  return (
    <Card className="doctor-card" variant="outlined">
      <div className="doctor-card-image">
        <img src={image} alt="Doctor" className="doctor-image" />
      </div>
      <CardContent className="doctor-card-details">
        <Typography variant="h6" component="div" marginBottom={1} marginTop={1}>
          
          {name}
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          
          {exp}{" "}
          years of experience
        </Typography>
        <Typography variant="body2" component="div" marginBottom={1}>
          
          {degree}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="div">
          
          {location}
        </Typography>
      </CardContent>
      {/* Actions (appointment button) */}
      <CardActions>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          onClick={handleBookAppointmentClick}
          endIcon={<VideoCallIcon />}
        >
          Book Appointment
        </Button>
      </CardActions>
    </Card>
  );
};

export default DoctorCard;
