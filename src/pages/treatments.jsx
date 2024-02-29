import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TreatmentCard from "../components/treatement/treatmentCard";
// import 'react-calendar/dist/Calendar.css';
const Treatments = () => {
  const navigation = useNavigate();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);

  // Dummy time slots for the selected date
  const availableTimeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "02:00 PM",
    "03:00 PM",
  ];

  // Calculate the date 7 days from today
  const maxSelectableDate = new Date();
  maxSelectableDate.setDate(maxSelectableDate.getDate() + 7);

  const TreatmentList = ({ treatments }) => (
    <div className="treatment-list">
      {" "}
      {treatments.map((treatment, index) => (
        <TreatmentCard
          key={index}
          {...treatment}
          onClick={() => navigation.push("/docListFromTreatments")}
        />
      ))}{" "}
    </div>
  );

  const treatments = [
    {
      name: "Cardiology",
      image:
        "https://s3-ap-south-1.amazonaws.com/images.hospals.com/uploads/disease_department/cardiac_surgery.png",
      subTreatment: ["Angioplasty", "Bypass Surgery", "Heart Transplant"],
    },
    {
      name: "Dentistry",
      image:
        "https://images.freeimages.com/images/large-previews/56d/peacock-1169961.jpg?fmt=webp&w=500",
      subTreatment: ["Root Canal", "Dental Implants", "Teeth Whitening"],
    },
    // Add more doctors as needed
  ];

  return (
    <div>
      <h2> Our Treatments </h2>{" "}
      <div className="horizontal-scrollable-list">
        <TreatmentList treatments={treatments} />{" "}
      </div>{" "}
    </div>
  );
};

export default Treatments;
