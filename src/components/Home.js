import React, { useState, useEffect } from "react";
import { getPhotos } from "../api/apicall";

import Base from "../reusables/Base";
import ImageHelper from "./ImageHelper";

const Home = () => {
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const loadAllPhotos = () => {
    getPhotos()
      .then((data) => {
        if (data.error) {
          setError(true);
        } else {
          setPhotos(data);
          setError(false);
          setLoading(false);
        }
      })
      .catch((err) => {
        setError(true);
      });
  };

  useEffect(() => {
    loadAllPhotos();
  }, []);

  const loadContent = () => {
    return (
      <div className="container">
        {loading ? (
          <div class="text-center">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div class="spinner-grow text-warning" role="status">
              <span class="visually-hidden"></span>
            </div>
          </div>
        ) : (
          <div className="row">
            {photos.map((photo, index) => {
              return (
                <div key={index} className="col-md-4 mx-auto">
                  <ImageHelper detail={photo} />
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  };

  const showError = () => {
    return (
      <div className="text-center">
        <br />
        <br />
        <br />
        <br />
        <h4 className="text-danger">
          <span className="align-middle">Something went wrong!</span>
        </h4>
      </div>
    );
  };

  return <Base>{error ? showError() : loadContent()}</Base>;
};

export default Home;
