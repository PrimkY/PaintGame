import React from 'react';
import {useNavigate} from "react-router-dom";
import Navbar from "./Navbar";

const HomePage = () => {
  const navigate = useNavigate;

  return (
    <div>
      <Navbar></Navbar>
    </div>
  );
};

export default HomePage;
