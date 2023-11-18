import React from "react";
import { Link } from "react-router-dom";

const StudentRecordNavigation = () => {
  return (
    <div className="border sm:p-4 p-2 border-black h-auto">
      <div className="flex justify-between">
        <h2 className="tracking-widest font-serif sm:text-xl text-sm">
          Student Record System
        </h2>
        <div className="flex sm:gap-3 gap-1 cursor-pointer tracking-widest font-serif sm:text-xl text-sm">
          <Link to="/">
            <h2>Add Record</h2>
          </Link>
          <Link to="/records">
            <h2>View Record</h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StudentRecordNavigation;
