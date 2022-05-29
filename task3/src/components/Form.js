import React, { useState, useEffect } from "react";
export default function Form(props) {
  const [skills, setSkills] = useState({
    Java: false,
    HTML: false,
    CSS: false,
  });
  const [student, setStudent] = useState({
    name: "",
    email: "",
    website: "",
    image_link: "",
    gender: "",
    skill: {
      Java: false,
      HTML: false,
      CSS: false,
    },
    response: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  let name, value;
  const handleInputs = (e) => {
    name = e.target.id;
    value = e.target.value;
    setStudent({ ...student, [name]: value });
    setSubmitted(false);
  };
  const handleChange = (e) => {
    const { value } = e.target;
    if (skills.value) {
      setSkills({ ...skills, [value]: false });
    } else {
      setSkills({ ...skills, [value]: true });
    }
    setSubmitted(false);
  };
  useEffect(() => {
    let selected_skills = [];
    if (skills.Java) {
      selected_skills.push("Java");
    }
    if (skills.HTML) {
      selected_skills.push("HTML");
    }
    if (skills.CSS) {
      selected_skills.push("CSS");
    }
    setStudent({
      ...student,
      response: selected_skills.join(","),
      skill: skills,
    });
    setSubmitted(false);
  }, [skills]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      student.name === "" ||
      student.email === "" ||
      student.website === "" ||
      student.image_link === "" ||
      student.gender === ""
    ) {
      setError(true);
    } else {
      props.enrollStudent({
        id: Math.floor(Math.random() * 100000),
        details: student,
      });
      setStudent({
        name: "",
        email: "",
        website: "",
        image_link: "",
        gender: "",
        skill: {
          Java: false,
          HTML: false,
          CSS: false,
        },
      });
      setSkills({
        Java: false,
        HTML: false,
        CSS: false,
      });
      setSubmitted(true);
      setError(false);
    }
  };

  const handleClear = (e) => {
    setStudent({
      name: "",
      email: "",
      website: "",
      image_link: "",
      gender: "",
      skill: {
        Java: false,
        HTML: false,
        CSS: false,
      },
    });
    setSkills({
      Java: false,
      HTML: false,
      CSS: false,
    });
  };

  const successMessage = () => {
    return (
      <div
        className="text-success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <h5>Student {student.name} Enrolled Successfully !!!</h5>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div
        className="text-danger"
        style={{
          display: error ? "" : "none",
        }}
      >
        <h5>Please enter all the fields</h5>
      </div>
    );
  };

  return (
    <div>
      <div className="mb-2">
        {errorMessage()}
        {successMessage()}
      </div>
      <form onSubmit={handleSubmit} onReset={handleClear}>
        <div className="mb-3 row">
          <label className="col-sm-3 col-form-label">Name</label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control w-50"
              id="name"
              value={student.name}
              onChange={handleInputs}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-3 col-form-label">Email</label>
          <div className="col-sm-9">
            <input
              type="email"
              className="form-control w-50"
              id="email"
              value={student.email}
              onChange={handleInputs}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-3 col-form-label">Website</label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control w-50"
              id="website"
              value={student.website}
              onChange={handleInputs}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-3 col-form-label">Image Link</label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control w-50"
              id="image_link"
              value={student.image_link}
              onChange={handleInputs}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-3 col-form-label">Gender</label>
          <div className="col-sm-9 mt-2">
            <input
              className="form-check-input me-1"
              type="radio"
              name="flexRadioDefault"
              id="gender"
              value="Male"
              checked={student.gender === "Male"}
              onChange={handleInputs}
            />
            <label className="form-check-label me-3">Male</label>

            <input
              className="form-check-input me-1"
              type="radio"
              name="flexRadioDefault"
              id="gender"
              value="Female"
              checked={student.gender === "Female"}
              onChange={handleInputs}
            />
            <label className="form-check-label">Female</label>
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-3 col-form-label">Skill</label>
          <div className="col-sm-9 mt-2">
            <input
              className="form-check-input me-1"
              type="checkbox"
              name="skill"
              id="Java"
              value="Java"
              onChange={handleChange}
              checked={skills.Java === true}
            />
            <label className="form-check-label me-3">Java</label>

            <input
              className="form-check-input me-1"
              type="checkbox"
              name="skill"
              id="HTML"
              value="HTML"
              onChange={handleChange}
              checked={skills.HTML === true}
            />
            <label className="form-check-label me-3">HTML</label>

            <input
              className="form-check-input me-1"
              type="checkbox"
              name="skill"
              id="CSS"
              value="CSS"
              onChange={handleChange}
              checked={skills.CSS === true}
            />
            <label className="form-check-label">CSS</label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary me-4">
          Enroll Student
        </button>
        <button type="reset" className="btn btn-danger">
          Clear
        </button>
      </form>
    </div>
  );
}
