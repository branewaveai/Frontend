import { Container, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import DetailedDoctorCard from "../signup/DetailedDoctorCard";
import Footer from "./footer";

const DoctorListPage = ({ doctorList }) => {
  // State for search filters
  const [specialty, setSpecialty] = useState("");
  const [city, setCity] = useState("");
  const [hospital, setHospital] = useState("");

  // State for pagination
  const [page, setPage] = useState(1);
  const itemsPerPage = 8;

  // Filtered and paginated doctor list based on search filters and pagination
  const filteredDoctorList = doctorList
    .filter(
      (doctor) =>
        (!specialty || doctor.specialty === specialty) &&
        (!city || doctor.city === city) &&
        (!hospital || doctor.hospital === hospital)
    )
    .slice((page - 1) * itemsPerPage, page * itemsPerPage);

  // Function to handle pagination
  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <>
      <div>
        <Container style={{ marginTop: "140px" }}>
          <Typography variant="h5" align="center" gutterBottom>
          Best Doctors in India
          </Typography>
          <Grid container spacing={1}>
            {filteredDoctorList.map((doctor, index) => (
              <Grid key={index} item xs={12} sm={6}>
                <DetailedDoctorCard doctor={doctor} />
              </Grid>
            ))}
          </Grid>
          {/* Pagination controls */}
          {/* <div>
            <button onClick={handlePrevPage} disabled={page === 1}>
              Previous
            </button>
            <span> {`Page ${page}`} </span>
            <button
              onClick={handleNextPage}
              disabled={filteredDoctorList.length < itemsPerPage}
            >
              Next
            </button>
          </div> */}
        </Container>
        <Footer />
      </div>
    </>
  );
};

export default DoctorListPage;
