import { CurrencyRupee } from "@mui/icons-material";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import ExperienceIcon from "@mui/icons-material/Star";
import { Paper } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const DetailedDoctorCard = ({ doctor }) => {
  const { doctorId, name, image, exp, degree, patientsConsulted } = doctor;
  const navigate = useNavigate();

  const handleBookAppointmentClick = () => {
    console.log("I'm navigating to appointments");
    navigate(`/doctors/${doctorId}/appointments`);
  };

  return (
    <Paper
      elevation={3}
      style={{
        borderRadius: "16px",
        marginBottom: "20px",
        flexBasis: "45%",
        marginRight: "20px",
        minWidth: "250px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          height: "100%",
        }}
      >
        <img
          alt={name}
          src={image}
          style={{
            width: "40%",
            height: "auto",
            objectFit: "cover",
            borderRadius: "16px",
            padding:'10px'
          }}
        />
        <div style={{ padding: "16px", flexGrow: 1 }}>
          <h4>{name}</h4>
          <h6 style={{ color: "gray", marginBottom: "8px" }}>Neurologist</h6>
          <p style={{ marginBottom: "8px" }}>{degree}</p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "8px",
            }}
          >
            <LocalHospitalIcon color="primary" />
            <p style={{ marginLeft: "5px" }}>Fortis Hospital, Bangalore</p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "8px",
            }}
          >
            <ExperienceIcon color="primary" />
            <p style={{ marginLeft: "5px" }}>{`${exp} years of experience`}</p>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <CurrencyRupee color="primary" />
            <p style={{ marginLeft: "5px" }}>
              <b>2000</b> for Video consultation
            </p>
          </div>
          <button
            style={{
              marginTop: "10px",
              backgroundColor: "#1976D2",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "5px",
              cursor: "pointer",
              alignSelf: "flex-end", // Align button to the end of the container
            }}
            onClick={handleBookAppointmentClick}
          >
            Book Appointment
          </button>
        </div>
      </div>
    </Paper>
  );
};

export default DetailedDoctorCard;
