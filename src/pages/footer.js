import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SendIcon from "@mui/icons-material/Send";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Grid, Link, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../components/styles/footer.css";
const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (isValidEmail(email)) {
      console.log("Email sent:", email);
    } else {
      console.error("Invalid email:", email);
    }
    setEmail("");
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };
  const navigate = useNavigate();
  return (
    <footer className="footer-container">
      <Grid container spacing={3} justifyContent="space-between">
        <Grid item xs={12} sm={6} md={3}>
          <div style={{ textAlign: "left", marginLeft: "10px" }}>
            <Typography variant="h4" style={{ marginBottom: "10px" }}>
              {" "}
              CURA AID{" "}
            </Typography>
            <Typography style={{ fontSize: "12px" }}>
              Copyright &copy; 2021 curaaid
            </Typography>
            <br></br>
            <Typography style={{ fontSize: "12px" }}>
              All Right Reserve
            </Typography>
            <div className="footer-social-links">
              <Link
                href="https://www.linkedin.com/company/curaaid/"
                color="inherit"
                target="_blank"
                rel="noopener"
                className="social-link"
              >
                <LinkedInIcon />
              </Link>

              <Link
                href="https://www.instagram.com/curaaid/"
                color="inherit"
                target="_blank"
                rel="noopener"
                className="social-link"
              >
                <InstagramIcon />
              </Link>
              <Link
                href="https://twitter.com/your-twitter-profile"
                color="inherit"
                target="_blank"
                rel="noopener"
                className="social-link"
              >
                <TwitterIcon />
              </Link>
              <Link
                href="https://www.youtube.com/your-youtube-channel"
                color="inherit"
                target="_blank"
                rel="noopener"
                className="social-link"
              >
                <YouTubeIcon />
              </Link>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <div style={{ textAlign: "left" }}>
            <Typography variant="h5" style={{ marginBottom: "5px" }}>
              {" "}
              Pages{" "}
            </Typography>
            <div className="pages-links-container">
              <div className="pages-links">
                <Link color="inherit" onClick={() => navigate("/home")}>
                  Home
                </Link>
                <br />
                <Link color="inherit" onClick={() => navigate("/treatments")}>
                  Treatments
                </Link>
                <br />
                <Link color="inherit" onClick={() => navigate("/hospitals")}>
                  Hospitals
                </Link>
                <br />
                <Link color="inherit" onClick={() => navigate("/doctors")}>
                  Doctors
                </Link>
                <br />
                <Link color="inherit" onClick={() => navigate("/blogs")}>
                  Blogs
                </Link>
                <br />
                <Link color="inherit" onClick={() => navigate("/dashboard")}>
                  Dashboard
                </Link>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <div style={{ textAlign: "left" }}>
            <div className="column3-links-container">
              <div className="column3-links">
                <Link color="inherit" onClick={() => navigate("/blogs")}>
                  Blogs
                </Link>
                <br />
                <Link color="inherit" onClick={() => navigate("/testimonials")}>
                  Testimonials
                </Link>
                <br />
                <Link color="inherit" onClick={() => navigate("/about")}>
                  About Us
                </Link>
                <br />
                <Link color="inherit" onClick={() => navigate("/policy")}>
                  Policy
                </Link>
              </div>
            </div>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <div style={{ textAlign: "center" }}>
            <Typography variant="h4" style={{ marginTop: "20px" }}>
              {" "}
              Contact Us{" "}
            </Typography>
            <Typography variant="body1">
              email address: curaaidventures@gmail.com
            </Typography>
            <div
              style={{
                marginTop: "10px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <input
                type="email"
                value={email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                style={{
                  padding: "8px",
                  flex: "1",
                  border: "1px solid #0077B5",
                  borderRight:'1px solid #f0f0f0',
                  borderRadius: "5px",
                  borderTopRightRadius:'0px',
                  height:'40px'
                }}
              />
              <button
                type="submit"
                onClick={handleSubmit}
                style={{
                 
                  backgroundColor: "transparent",
                  color: "#0077B5", // Change color to match your design
                  borderRadius: "5px",
                  border: "1px solid #0077B5", 
                  borderLeft:'1px solid #f0f0f0',
                  borderTopLeftRadius:'0px',
                  zIndex: 2,
                  padding: "8px",
                  cursor: "pointer",
                  display: "flex",
                  height:'40px',
                  marginRight:'10px',
                  alignItems: "center",
                }}
              >
                <SendIcon />
              </button>
            </div>
          </div>
        </Grid>
      </Grid>
      {/*<hr style={{ border: "1px solid skyblue", margin: "20px 0" }} />*/}
    </footer>
  );
};

export default Footer;
