import React from "react";
import "./errorScreen.css";
import Nav from "../Nav";
import { useNavigate } from "react-router-dom";

const ErrorScreen = () => {
    const navigate = useNavigate()
  return (
    <div className="errorScreen__body">
      <div class="error-container">
        <h1 class="error-title">Netflix Error H404</h1>
        <p class="error-message">Please try again later or contact support.</p>
        <button
          class="error-button"
          onClick={() => navigate('/profile')}
        >
          Back to Profile Page
        </button>
      </div>
    </div>
  );
};

export default ErrorScreen;
