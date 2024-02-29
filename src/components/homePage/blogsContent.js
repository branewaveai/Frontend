import React from "react";
import Banner1 from "../../assets/icons/BlogBanner1.jpeg";
import Banner2 from "../../assets/icons/BlogBanner2.jpeg";
import Banner3 from "../../assets/icons/BlogBanner3.jpeg";
const BlogsBanner = () => {
  return (
    <div
      style={{
        width: "100vw",
        backgroundColor: "#F3FDF7",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "77%",
          margin: "0 auto",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            flex: 1,
            marginRight: "10px",
            height: "500px",
            display: "flex",
            alignItems: "center",
            paddingLeft: "20px",
          }}
        >
          <div>
            <h2
              style={{
                fontWeight: "bold",
                fontSize: "35px",
                textAlign: "left",
                fontFamily: "Georgia, serif",
                marginBottom: "15px",
              }}
            >
              Latest Blogs
            </h2>
            <p style={{ textAlign: "left" }}>
              Lorem ipsum dolor sit amet consectetur. Sed nisl convallis blandit
              pretium sollicitudin ac augue.
            </p>
            <div
              style={{
                backgroundColor: "Blue",
                padding: "5px 10px",
                display: "inline-block",
                marginTop: "10px",
              }}
            >
            <a
            href="/blogs"
            style={{
              textDecoration: "none",
              color: "white",
              fontWeight: "bold",
              position: "relative",
              display: "inline-block",
              verticalAlign: "middle",
            }}
          >
            See More &rarr;
          </a>
            </div>
          </div>
        </div>
        <div style={{ flex: 1, marginLeft: "10px", display: "flex",height:'500px' }}>
          <div
            style={{
              flex: 1,
              marginRight: "10px",
              fontFamily: "Georgia, serif",
            }}
          >
            <img
              src={Banner1}
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div style={{ flex: 1, display: "flex", flexDirection: "column"}}>
            
            <div style={{ flex: 1, marginBottom:'1%', height:'48%'}}>
              <img
                src={Banner2}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <div style={{ flex: 1, marginTop:'1%',height:'48%' }}>
              <img
                src={Banner3}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsBanner;
