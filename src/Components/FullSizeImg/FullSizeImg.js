import React, { useContext } from "react";
import { NasaContext } from "../../Context/NasaContext";
import Loader from "../Loader/Loader";

const FullSizeImg = () => {
  const { loading, astronomyData } = useContext(NasaContext);

  if (loading) {
    return <Loader />;
  }

  return (
    <div
      style={{
        backgroundImage: `url("${astronomyData.hdurl}")`,
        minHeight: "100vh",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }}
    >
      <div
        className="text-center"
        style={{
          backgroundColor: "rgba(0,0,0,.5)",
          padding: "20px",
          borderRadius: "5px"
        }}
      >
        <h3 className="text-light mb-4" style={{ fontWeight: 300 }}>
          High resolution image?
        </h3>
        <a
          href={astronomyData.hdurl}
          className="btn btn-outline-light"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click Me!
        </a>
      </div>
    </div>
  );
};

export default FullSizeImg;
