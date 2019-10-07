import React, { useContext } from "react";
import { NasaContext } from "../../Context/NasaContext";
import { Link } from 'react-router-dom'
import Loader from "../Loader/Loader";
import './Landing.css'

export default function Landing() {
  const { astronomyData, loading } = useContext(NasaContext);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="mt-5">
      <h1 className="display-4 text-center mb-4 title">{astronomyData.title}</h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">  
            <Link to="/full">
              <img
                className="img-fluid rounded mx-auto d-block mb-3"
                src={astronomyData.url}
                alt={astronomyData.title}
              />
            </Link>
            {astronomyData.copyright && <p className="text-muted text-center">
              Copyrighth: {astronomyData.copyright}
            </p>}
            </div>
            <div className="col-lg-6">
            <p>
              <strong>Description:</strong> {astronomyData.explanation}
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            
          </div>
        </div>
      </div>
    </div>
  );
}
