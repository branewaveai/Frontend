import Paper from "@mui/material/Paper";
import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import styled from "styled-components";
import CoverImage2 from "../../assets/icons/CoverImage2.svg";
import coverImage1 from "../../assets/icons/coverImage1.png";
import "./StyleHome/topPage.css";
const IconLink = styled.a`
  text-decoration: none;
  color: inherit;
`;

const IconContainer = styled.div`
  margin-right: 5px;
`;

const Wrapper = styled.div`
  display: grid;
  // border: 2px solid #ddd;
  grid-template-columns: 1fr 1fr;
  max-width: 1300px;
  height: 550px;
  // position: relative;
  margin: 0;
  @media (max-width: 768px) {
    height: 1200px;
    grid-template-columns: 1fr;
  }
`;
// const BlockContainer = styled.div`
//   margin: 5px;
// `;

const BlockContainer = styled.div`
  // border: 2px solid #ddd;
  margin: 5px;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  align-items: stretch; /* Ensure children stretch to full width */
  justify-content: space-between; /* Distribute space evenly between children */

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    margin-top: 0 !important;
  }
`;
// const ImageBlock = styled(BlockContainer)`
//   width: 100%;
//   height: 40%px;
//   display: flex;
//   border: 1px solid #ddd;
//   align-items: center;
//   justify-content: center;
//   margin-bottom: 0px;
//   border-radius: 5px;
//   // margin-right: 400px;
//   @media (max-width: 768px) {
//     grid-template-columns: 1fr;
//   }
// `;
const ImageBlock = styled(BlockContainer)`
  width: 100%;
  height: 250px;
  display: flex;
  // border: 1px solid #ddd;
  border: 2px solid #ddd;
  align-items: center;
  justify-content: center;
  margin-right: 40px;
  border-radius: 5px;
  @media (max-width: 768px) {
    height: 200px;
    grid-template-columns: 1fr;
  }
`;
const ImageContent = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

// const FlexContainer = styled.div`
//   display: flex;
//   justify-content: normal;
//   height: 160px;
//   border-radius: 10px;
//   margin-bottom: 20px;
// `;
const FlexContainer = styled.div`
  display: flex;
  // border: 2px solid #ddd;
  justify-content: normal;
  height: 300px;
  border-radius: 10px;
  margin-left: 10px;
  // margin-bottom: 20px;
  @media (max-width: 768px) {
    height: 360px;
  }
`;

const Block = styled.div`
  border: 2px solid #ddd;
  width: 50%; /* Set the width to 50% */
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: normal;
  border-radius: 5px;
  background-color: #10d6d6;
`;

// const Block = styled(BlockContainer)`
//   border: 1px solid #ddd;
//   width: 50%;
//   height: 330px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: normal;
//   border-radius: 5px;
//   margin-left: 15px;
// `;

const HalfBlock = styled(BlockContainer)`
  flex: 1;
  max-width: 98%; /* Adjust the maximum width as needed */
  height: 48%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  margin-top: 10x;
`;

// const HalfBlock = styled(BlockContainer)`
//   width: 300px;
//   height: 160px;
//   display: flex;
//   align-items: center;
//   border: 1px solid #ddd;
//   justify-content: center;
//   border-radius: 5px;
// `;

const ImageCover = styled.div`
  width: 98%;
  height: 70%;
  // display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  // margin-top: 10px;
  border: 2px solid #ddd;
  border-radius: 5px;
`;

// const Block1 = styled(BlockContainer)`
//   border: 1px solid #ddd;
//   width: 98%;
//   height: 160px;
//   border-radius: 5px;
//   display: flex;
//   margin-top:0px;
//   justify-content: normal;
// `;
const Block1 = styled(BlockContainer)`
  // border: 1px solid #ddd;
  fontsize: 1rem;
  width: 97%;
  height: 55%;
  border-radius: 5px;
  display: flex;
  justify-content: normal;
`;
const QuarterBlock = styled(BlockContainer)`
  flex: 1;
  width: 100%;
  height: 125px;
  // border: 2px solid #ddd;
  margin-bottom: 0px;
  margin-top: 0px;
  border-radius: 5px;
  // transform: translateX(-50%);
  justify-content: center; /* horizontally center */
  align-items: center; /* vertically center */
`;
const StyledNumber = styled.div`
  font-family: "Playfair Display", serif;
  font-style: normal;
  font-weight: 500;
  font-size: 50px;
  line-height: 67px;
  color: #000000;
  padding: "10px";
`;

const StyledText = styled.div`
  font-family: "Playfair Display", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  margin-top: "10px";
  letter-spacing: 0.04em;
  color: #000000;
`;
const StyledTextContainer = styled.div`
  margin-left: 5px;
  align-items: center;
`;

const TopPage = () => {
  const patientsCnt = 100;
  return (
    <Wrapper>
      <ImageBlock>
        <ImageContent src={coverImage1} alt="Image" className="img" />
      </ImageBlock>
      <FlexContainer>
        <Block>
          <div className="box-container">
            <div className="number">20+</div>
            <div className="text">Patients are reached</div>
            <div className="description">
              India is a prime destination for medical tourism, offering
              affordable, high-quality healthcare, cutting-edge technology, and
              skilled professionals. India's holistic wellness options, easy
              medical visa process, and rich cultural experiences enhance the
              appeal, making it a holistic choice for patients worldwide seeking
              quality medical care.
            </div>
          </div>
        </Block>
        <div style={{ flex: 1 }}>
          <HalfBlock>
            <Paper
              elevation={3}
              style={{
                width: "100%",
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <StyledTextContainer>
                <StyledNumber
                  style={{ marginBottom: "10px", marginLeft: "5px" }}
                >
                  4
                </StyledNumber>
                <StyledText> Countries Reached </StyledText>
              </StyledTextContainer>
            </Paper>
          </HalfBlock>
          <HalfBlock>
            <Paper
              elevation={3}
              style={{
                width: "100%",
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <StyledTextContainer>
                <StyledNumber style={{ marginBottom: "10px" }}>18</StyledNumber>
                <StyledText> Doctors Partnered</StyledText>
              </StyledTextContainer>
            </Paper>
          </HalfBlock>
        </div>
      </FlexContainer>
      <BlockContainer
        style={{
          marginTop: "-45px",
          height: "320px",
        }}
      >
        <div style={{ display: "flex", flex: 1 }}>
          <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
            <div
              style={{
                display: "flex",
                flex: 1,
                margin: "0px 0",
                height: "100px",
              }}
            >
              <Paper elevation={3} style={{ width: "45%", margin: "5px" }}>
                <QuarterBlock>
                  <IconLink
                    href="https://www.linkedin.com/company/curaaid/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconContainer>
                      <FaLinkedin size={50} color="#0077B5" />
                    </IconContainer>
                  </IconLink>
                </QuarterBlock>
              </Paper>
              <Paper elevation={3} style={{ width: "45%", margin: "5px" }}>
                <QuarterBlock>
                  <IconLink href="https://www.instagram.com/curaaid/">
                    <IconContainer>
                      <FaInstagram size={50} color="#ED2285" />
                    </IconContainer>
                  </IconLink>
                </QuarterBlock>
              </Paper>
            </div>
            <Paper
              elevation={3}
              style={{
                width: "95%",
                height: "50%",
                fontFamily: "Roboto Slab, serif",
                fontSize: "0.9rem",
              }}
            >
              <Block1>
                <span
                  style={{
                    marginTop: "10px",
                    color: "green",
                    fontSize: "3rem",
                    fontWeight: "900",
                    textAlign: "center",
                    marginBottom: "15px",
                  }}
                >
                  CURA AID
                </span>
                <span
                  style={{
                    fontSize: "1.3rem",
                    textAlign: "center",
                    marginBottom: "2px",
                  }}
                >
                  Where Healing Meets Exploration
                </span>
              </Block1>
            </Paper>
          </div>
          <Block
            style={{
              marginTop: "5px",
              flex: 1,
              fontSize: 12,
              fontFamily: "Playfair Display",
              backgroundColor: "#09CE6C",
            }}
          >
            <div className="box-container">
              <div className="number">12</div>
              <div className="text">Hospitals Partners</div>
              <div className="description">
                Our network comprises world-class medical facilities renowned
                for their expertise, cutting-edge technology, and compassionate
                care. From visa support to arranging travel and accommodation,
                we handle it all to ensure a seamless experience for our
                patients.
              </div>
            </div>
          </Block>
        </div>
      </BlockContainer>
      <ImageCover style={{ marginTop: "10px", height: "270px" }}>
        <ImageContent src={CoverImage2} alt="Image" className="img" />
      </ImageCover>
    </Wrapper>
  );
};

export default TopPage;
