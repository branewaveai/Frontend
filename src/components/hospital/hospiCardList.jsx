import React, { useCallback, useEffect, useState } from "react";
import "../styles/hospiCard.css";
import HospitalCard from "./hospitalCard";
const HospitalList = ({ doctorsToShowPerPage }) => {
  // const [hospitals, setHospitals] = useState([]);

  // useEffect(() => {
  //   //get hospitals from Api
  //   const fetchhospitals = [
  //     {
  //       hospitalId: 1,
  //       name: "Fortis Hospital ,Noida",
  //       phoneNumber: "123-456-7890",
  //       image:"https://s3.ap-south-1.amazonaws.com/curaid.photos/max_saket.png",
  //       estd: 1991,
  //       location: "Noida",
  //     },
  //     {
  //       hospitalId: 2,
  //       name: "Fortis Hospital ,Noida",
  //       phoneNumber: "123-456-7890",
  //       image:
  //         "https://s3.ap-south-1.amazonaws.com/curaid.photos/max_saket.png",
  //       estd: 1991,
  //       location: "Bangalore",
  //     },
  //     {
  //       hospitalId: 3,
  //       name: "Fortis Hospital ,Noida",
  //       phoneNumber: "123-456-7890",
  //       image:
  //         "https://s3.ap-south-1.amazonaws.com/curaid.photos/max_saket.png",
  //       estd: 1991,
  //       location: "Bangalore",
  //     },
  //     {
  //       hospitalId: 4,
  //       name: "Fortis Hospital ,Noida",
  //       phoneNumber: "123-456-7890",
  //       image:
  //         "https://s3.ap-south-1.amazonaws.com/curaid.photos/max_saket.png",
  //       estd: 1991,
  //       location: "Bangalore",
  //     },
  //     {
  //       hospitalId: 5,
  //       name: "Fortis Hospital ,Noida",
  //       phoneNumber: "123-456-7890",
  //       image:
  //         "https://s3.ap-south-1.amazonaws.com/curaid.photos/max_saket.png",
  //       estd: 1991,
  //       location: "Bangalore",
  //     },
  //     {
  //       hospitalId: 6,
  //       name: "Fortis Hospital ,Noida",
  //       phoneNumber: "123-456-7890",
  //       image:
  //         "https://s3.ap-south-1.amazonaws.com/curaid.photos/max_saket.png",
  //       estd: 1991,
  //       location: "Bangalore",
  //     },
  //     {
  //       hospitalId: 7,
  //       name: "Fortis Hospital ,Noida",
  //       phoneNumber: "123-456-7890",
  //       image:
  //         "https://s3.ap-south-1.amazonaws.com/curaid.photos/max_saket.png",
  //       estd: 1991,
  //       location: "Bangalore",
  //     },
  //     {
  //       hospitalId: 8,
  //       name: "Fortis Hospital ,Noida",
  //       phoneNumber: "123-456-7890",
  //       image:
  //         "https://s3.ap-south-1.amazonaws.com/curaid.photos/max_saket.png",
  //       estd: 1991,
  //       location: "Bangalore",
  //     },
  //     {
  //       hospitalId: 9,
  //       name: "Fortis Hospital ,Noida",
  //       phoneNumber: "123-456-7890",
  //       image:
  //         "https://s3.ap-south-1.amazonaws.com/curaid.photos/max_saket.png",
  //       estd: 1991,
  //       location: "Bangalore",
  //     },
  //     {
  //       hospitalId: 10,
  //       name: "Fortis Hospital ,Noida",
  //       phoneNumber: "123-456-7890",
  //       image:
  //         "https://s3.ap-south-1.amazonaws.com/curaid.photos/max_saket.png",
  //       estd: 1991,
  //       location: "Bangalore",
  //     },
  //     {
  //       hospitalId: 11,
  //       name: "Fortis Hospital ,Noida",
  //       phoneNumber: "123-456-7890",
  //       image:
  //         "https://s3.ap-south-1.amazonaws.com/curaid.photos/max_saket.png",
  //       estd: 1991,
  //       location: "Bangalore",
  //     },
  //     {
  //       hospitalId: 12,
  //       name: "Fortis Hospital ,Noida",
  //       phoneNumber: "123-456-7890",
  //       image:
  //         "https://s3.ap-south-1.amazonaws.com/curaid.photos/max_saket.png",
  //       estd: 1991,
  //       location: "Bangalore",
  //     }
  //   ];
  //   setHospitals(fetchhospitals);
  // },[]);
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
  const itemsPerPage = doctorsToShowPerPage || 4;
  const [currentPage, setCurrentPage] = useState(1);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [currentHospitals, setCurrentHospitals] = useState([]);
  const [columns, setColumns] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const calculateColumns = useCallback(() => {
    if (windowWidth >= 1200) {
      return 4;
    } else if (windowWidth >= 768 && windowWidth < 1200) {
      return 2;
    } else {
      return 1;
    }
  }, [windowWidth]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const newColumns = calculateColumns();
    setColumns(newColumns);

    const newTotalPages = Math.ceil(hospitals.length / itemsPerPage);
    setTotalPages(newTotalPages);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const hospitalsToDisplay = hospitals.slice(
      indexOfFirstItem,
      indexOfLastItem
    );
    console.log(indexOfFirstItem + " " + indexOfLastItem);
    setCurrentHospitals(hospitalsToDisplay);
  }, [currentPage, itemsPerPage, calculateColumns]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="containeer-list">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gap: "10px",
          justifyContent: "center",
          marginTop: "10px",
        }}
      >
        {currentHospitals.map((hospital) => (
          <HospitalCard key={hospital.hospitalId} {...hospital} />
        ))}
      </div>
    </div>
  );
};

export default HospitalList;
