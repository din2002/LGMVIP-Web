import React, { useState } from "react";
import Data from "./Data";
import Form from "./Form";

export default function DataList() {
  const [studentList, setStudentList] = useState([]);

  const enrollStudent = (detailsInput) => {
    if (!detailsInput.details) {
      return;
    }
    const newStudent = [detailsInput, ...studentList];
    setStudentList(newStudent);
  };
  return (
    <div className="container">
        <p className="text-light fs-1 fw-bold mt-3 mb-4 text-center bg-primary">Student Enrollment Form</p>
      <div className="row">
        <div className="col-6">
          <Form enrollStudent={enrollStudent}></Form>
        </div>
        <div className="col-6">
            <h4 className="mb-4 text-center">Enrolled Students</h4>
          <Data studentList={studentList}></Data>
        </div>
      </div>
    </div>
  );
}
