import { Typography } from "@mui/material";
import React from "react";
import { useNavigate } from 'react-router-dom';
import "./StyleHome/treatment.css"; // Import CSS file for styling


const TreatmentComponent = () => {
  const navigate = useNavigate();
  const treatments = [
    { 
        id: 1, 
        title: "Oncology", 
        details: "Oncology focuses on the prevention, diagnosis, and treatment of cancer. Oncologists employ treatments like chemotherapy, radiation therapy, and surgery to combat cancer and enhance patients' well-being."
    },
    { 
        id: 2, 
        title: "Cardiology", 
        details: "Cardiology deals with the diagnosis, treatment, and prevention of heart diseases and disorders. Cardiologists specialize in managing conditions such as coronary artery disease, heart failure, and arrhythmias."
    },
    { 
        id: 3, 
        title: "Nephrology", 
        details: "Nephrology concentrates on the diagnosis and treatment of kidney diseases and disorders. Nephrologists specialize in managing conditions such as chronic kidney disease, kidney stones, and kidney failure."
    },
    { 
        id: 4, 
        title: "Neurosurgery", 
        details: "Neurosurgery is a medical specialty that focuses on the surgical treatment of conditions affecting the brain, spinal cord, and nervous system. Neurosurgeons are trained to perform intricate procedures."
    },
    {
        id: 5,
        title: "Treatment 2",
        details: "Details of Treatment 2"
    }
  ];
  const NavigateToTreatments = () => {
    console.log("I'm navigating to appointments");
    navigate('/treatments');
  };
  const renderTreatmentItem = (treatment) => (
    <div className="treatment-item" key={treatment.id}>
      <Typography variant="h6" sx={{ textAlign: "center" }}>
        {treatment.title}
      </Typography>
      <p className="treatment-details">{treatment.details}</p>
    </div>
  );
  const visibleTreatments = treatments.slice(0, 4);

  return (
    <div className="treatment-container">
      <Typography variant="h4" sx={{ textAlign: "center" }}>
        Treatments
        <span></span>
      </Typography>
      {/* <p className="treatment-context">
        Some context about the main treatment goes here.
      </p> */}
      <div className="treatment-details">
        <div className="treatment-list">
          {visibleTreatments.map(renderTreatmentItem)}
        </div>
        <button className="view-all-button" onClick={NavigateToTreatments}>
          View All Treatments
        </button>
      </div>
    </div>
  );
};

export default TreatmentComponent;
