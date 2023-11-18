import React from "react";
import StudentForm from "./StudentForm";
import ViewStudentRecord from "./ViewStudentRecord";
import StudentRecordNavigation from "./StudentRecordNavigation";

const StudentRecord = () => {
  return (
    <>
      <div className="sm:mx-32 m-3">
        <StudentRecordNavigation />
        <StudentForm />
      </div>
      <ViewStudentRecord />
    </>
  );
};
export default StudentRecord;
