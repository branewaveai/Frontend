import { Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import ConsultationIcon from "../../assets/icons/Consultations.svg";
import PlaneIcon from "../../assets/icons/Plane.svg";
import VehicleIcon from "../../assets/icons/Vehicle.svg";
import VisaIcon from "../../assets/icons/Visa_travel.svg";
import CareIcon from "../../assets/icons/care.svg";
import Line_Icon from "../../assets/icons/line.svg";
import "./StyleHome/features.css";

const Features = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className="maincontainer">
      <div style={{ width: "80%"}}>
        <Typography variant="h4" className="feature-heading">
          Features
        </Typography>
        <span className="services-description">
          {" "}
          These are the services we are providing for customer support and
          health
        </span>
        <div className="service-container">
        <div className="services">
            <img src={ConsultationIcon} alt="Consultation Icon" />
            <img style={{ marginBottom: "15px" }} src={Line_Icon} alt="" />
            <div style={{ marginRight: "5px", height: "40px" }}>
              <Typography variant="body2">
                Pre-Arrival Video Consultation
              </Typography>
            </div>
            <div style={{ height: "30px" }}>
              <Typography
                variant="body2"
                style={{ fontSize: "12px", marginTop: "25px" }}
              >
                Easy airport transfers and hospital visit transportation.
              </Typography>
            </div>
          </div>
          <div className="services">
            <img src={VisaIcon} alt="Visa Icon" />
            <img style={{ marginBottom: "15px" }} src={Line_Icon} alt="" />
            <div style={{ marginRight: "5px", height: "40px" }}>
              <Typography variant="body2">
                Visa & Travel Documentation Assistance
              </Typography>
            </div>
            <div style={{ height: "30px" }}>
              <Typography
                variant="body2"
                style={{ fontSize: "12px", marginTop: "25px" }}
              >
                Meet your doctors virtually for a comforting and transparent
                introduction.
              </Typography>
            </div>
          </div>
          <div className="services">
            <img src={PlaneIcon} alt="Plane Icon" />
            <img style={{ marginBottom: "15px" }} src={Line_Icon} alt="" />
            <div style={{ marginRight: "5px", height: "40px" }}>
              <Typography variant="body2">
                Flight & Accommodation Booking
              </Typography>
            </div>
            <div style={{ height: "30px" }}>
              <Typography
                variant="body2"
                style={{ fontSize: "12px", marginTop: "25px" }}
              >
                Hassle-free paperwork handling.
              </Typography>
            </div>
          </div>
          <div className="services">
            <img src={VehicleIcon} alt="Vehicle Icon" />
            <img style={{ marginBottom: "15px" }} src={Line_Icon} alt="" />
            <div style={{ marginRight: "5px", height: "40px" }}>
              <Typography variant="body2">Convenient Cab Services</Typography>
            </div>
            <div style={{ height: "30px" }}>
              <Typography
                variant="body2"
                style={{ fontSize: "12px", marginTop: "25px" }}
              >
                Tailored to your needs for comfort and convenience.
              </Typography>
            </div>
          </div>
          <div className="services">
            <img src={CareIcon} alt="Care Icon" />
            <div style={{ marginRight: "5px", height: "40px" }}>
              <Typography variant="body2">
                Coordinate pre & post-Surgery Care
              </Typography>
            </div>
            <div style={{ height: "30px" }}>
              <Typography
                variant="body2"
                style={{ fontSize: "12px", marginTop: "25px" }}
              >
                Organised doctor appointments and recovery plans.
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
