import React from "react";
import { useParams } from "react-router-dom";

const DoctorDetails = () => {
  const { doctorId } = useParams();

  // Fetch detailed information about the doctor using the doctorId

  return (
    <div>
      <h2>Doctor Details</h2>
      {/* Display detailed information about the doctor */}
      <p>Doctor ID: {doctorId}</p>
      {/* Add more details such as education, awards, blog, etc. */}
      {/* Add a form for appointment */}
      <form>
        {/* Form fields for user details */}
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        {/* Add more form fields as needed */}
        <button type="submit">Request Appointment</button>
      </form>
    </div>
  );
};

export default DoctorDetails;
