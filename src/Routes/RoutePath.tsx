import React from "react";
import { Route, Routes } from "react-router-dom";
import StudentRecord from "../components/StudentRecord";
import StudentDetail from "../components/StudentDetail";
import ViewRecords from "../components/ViewRecords";

const RoutePath = () => {
  return (
    <Routes>
      <Route path="/" element={<StudentRecord />} />
      <Route path="/records" element={<ViewRecords />} />
      <Route path="/details/:id" element={<StudentDetail />} />
    </Routes>
  );
};

export default RoutePath;
