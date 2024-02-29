import { Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { doPostRequest } from "../Request";
import "../components/styles/treatments.css";
import { CONST_KEYS, TreatmentsDetails } from "../config";
import Footer from "./footer";

const TreatmentPage = () => {
  const [treatments, setTreatments] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTreatments = () => {
    var myHeaders = new Headers();
    var tt = localStorage.getItem(CONST_KEYS.token);
    myHeaders.append("Content-Type", "application/json");
    console.log(tt);
    var reqJson = {
      method: "POST",
      headers: myHeaders,
    };
    doPostRequest(
      TreatmentsDetails,
      reqJson,
      (resp) => {
        var loginResp = resp;
        console.log(loginResp);
        if (loginResp.status === "SUCCESS") {
          console.log("Treatment Data fetched");
          setTreatments(loginResp?.data);
          setLoading(false); // Set loading to false once data is fetched
        } else {
          toast.error("Internal Error", { position: "top-right" });
        }
      },
      (err) => {
        toast.error("Failed", { position: "top-right" });
      }
    );
  };

  useEffect(() => {
    fetchTreatments();
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <div className="treatment-container" style={{marginTop: 140}}>
      {loading ? (
        <div>Loading...</div>
      ) : (
        treatments.map((treatment) => (
          <div key={treatment.id} className="treatment-row">
            <Paper elevation={3} className="treatment">
              <Typography
                variant="h5"
                gutterBottom
                style={{ textAlign: "left", marginLeft: "40px" }}
              >
                {treatment.name}
              </Typography>
              <Typography
                variant="body1"
                paragraph
                style={{ textAlign: "left", marginLeft: "40px" }}
              >
                {treatment.desc}
              </Typography>
              <div className="asd-closure-row">
                {treatment?.subTreatments &&
                Array.isArray(treatment.subTreatments) ? (
                  treatment?.subTreatments.map((subTreatment, index) => (
                    <Paper
                      key={index}
                      elevation={3}
                      className="asd-closure-box"
                    >
                      <Typography
                        variant="body2"
                        style={{ textAlign: "center", color: "#3586f0" }}
                      >
                        {subTreatment}
                      </Typography>
                    </Paper>
                  ))
                ) : (
                  <></>
                )}
              </div>
            </Paper>
          </div>
        ))
      )}
      <div style={{ width: "100%" }}>
        <Footer />
      </div>
    </div>
  );
};

export default TreatmentPage;
