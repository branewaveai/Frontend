import { Typography } from "@mui/material";
import React, { useState } from "react";
import HospitalCard from "../components/hospital/HospitalPageCard"; // Import the HospitalCard component
import Footer from "./footer";

const AboutHospitalsPage = () => {
  const [enquireHospitalIndex, setEnquireHospitalIndex] = useState(-1);

  const hospitals = [
    {
      Id: 1,
      name: "Paras Hospital ,Gurugram",
      image: "https://s3.ap-south-1.amazonaws.com/curaid.photos/paras.jpg",
      estdYear: 2006,
      location: "Gurugram",
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    
    {
      Id: 2,
      name: "Max Super Speciality Hospital, Saket",
      image: "https://s3.ap-south-1.amazonaws.com/curaid.photos/max_saket.jpg",
      estdYear: 2006,
      location: "Delhi",
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      Id: "3",
      image:
        "https://nimhans.co.in/wp-content/uploads/2019/10/full-view-of-Admin-building01.jpg",
      name: "Nimhans Hospital",
      location: "Bangalore",
      estdYear: 1990,
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  const handleEnquireClick = (index) => {
    setEnquireHospitalIndex(index);
  };

  return (
    <>
      <div style={{ margin: "150px auto", maxWidth: "1000px" }}>
        <Typography variant="h4" style={{ marginBottom: "20px" }}>
          About Hospitals
        </Typography>
        {hospitals.map((hospital, index) => (
          <div style={{ marginBottom: "20px" }}>
            <HospitalCard
              key={index}
              hospital={hospital}
              index={index}
              onEnquireClick={handleEnquireClick}
            />
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default AboutHospitalsPage;
