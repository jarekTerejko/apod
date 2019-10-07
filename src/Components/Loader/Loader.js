import React from "react";

const Loader = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        backgroundColor: "rgba(0,0,0,.8)",
        position: "fixed",
        left: 0,
        top: 0,
        zIndex: 10000,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div
        className="spinner-grow bg-danger"
        style={{ width: "4rem", height: "4rem" }}
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
