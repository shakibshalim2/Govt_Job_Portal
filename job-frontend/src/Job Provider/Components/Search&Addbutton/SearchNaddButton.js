import React from "react";
import "./SearchNaddButton.css";
import { BsSearch } from "react-icons/bs";
import { useFormik } from "formik";
export default function Search() {
  const validate = (values) => {
    const errors = {};
    if (!values.Title) {
      errors.Title = "Required";
    } else if (values.Title.length < 5) {
      errors.Title = "Must be greater than 5";
    } else if (values.Title.length > 25) {
      errors.Title = "Must be lesser than 25";
    }
    if (!values.Description) {
      errors.Description = "Required";
    } else if (values.Description.length < 20) {
      errors.Description = "Must be greater than 20";
    } else if (values.Description.length > 100) {
      errors.Description = "Must be lesser than 100";
    }
    if (!values.category) {
      errors.category = "Required";
    }
    if (!values.startDate) {
      errors.startDate = "Required";
    }
    if (!values.endDate) {
      errors.endDate = "Required";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      Title: "",
      Description: "",
      category: "",
      endDate: "",
      startDate: ""
    },
    validate,
    onSubmit: (values) => {
      alert("submitted");
    }
  });
  return (
    <div>
      <div className="searchNadd">
        <div className="manageUsersContainer">
          <div className="manageUsers">
            <span className="span">Manage Users</span>
          </div>
        </div>
        <div className="searchBox">
          <input
            className="searchTxt"
            type="txt"
            name=""
            placeholder="Type to search"
          />
          <a className="searchBtn" href="/">
            {" "}
            <BsSearch />
          </a>
        </div>
        <div className="buttonAlign">
          <button
            type="button"
            className="addButton"
            data-bs-toggle="modal"
            data-bs-target="#addpg"
          >
            Add new job{" "}
          </button>
        </div>
      </div>
      <div
        className="modal fade"
        id="addpg"
        tabIndex="-1"
        aria-labelledby="modal-title"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modal-title">
                Add New Job
              </h5>
            </div>
            <div className="modal-body">
              <form onSubmit={formik.handleSubmit}>
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Title
                </label>
                {formik.errors.Title ? (
                  <input
                    className="form-control"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.Title}
                    placeholder="Enter the job title"
                    aria-label="default input example"
                    name="Title"
                    style={{ border: "1px solid red" }}
                  />
                ) : (
                  <input
                    className="form-control"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.Title}
                    placeholder="Enter the job title"
                    aria-label="default input example"
                    name="Title"
                  />
                )}
                {formik.errors.Title ? (
                  <div className="error">{formik.errors.Title}</div>
                ) : null}
                <label htmlFor="descriptionArea" className="form-label">
                  Description
                </label>
                {formik.errors.Description ? (
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    onChange={formik.handleChange}
                    value={formik.values.Description}
                    placeholder="Enter the job description"
                    name="Description"
                    style={{ border: "1px solid red" }}
                  ></textarea>
                ) : (
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    onChange={formik.handleChange}
                    value={formik.values.Description}
                    placeholder="Enter the job description"
                    name="Description"
                  ></textarea>
                )}
                {formik.errors.Description ? (
                  <div className="error">{formik.errors.Description}</div>
                ) : null}
                <label htmlFor="descriptionArea" className="form-label">
                  Category
                </label>
                {formik.errors.category ? (
                  <select
                    className="form-select"
                    onChange={formik.handleChange}
                    value={formik.values.category}
                    aria-label="Default select example"
                    name="category"
                    style={{ border: "1px solid red" }}
                  >
                    <option value="">-</option>
                    <option value="1">one</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                ) : (
                  <select
                    className="form-select"
                    onChange={formik.handleChange}
                    value={formik.values.category}
                    aria-label="Default select example"
                    name="category"
                  >
                    <option value="">-</option>
                    <option value="1">one</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                )}

                {formik.errors.category ? (
                  <div className="error">{formik.errors.category}</div>
                ) : null}

                <label htmlFor="Start date" className="form-label">
                  Start Date
                </label>
                {formik.errors.startDate ? (
                  <input
                    name="startDate"
                    type="date"
                    onChange={formik.handleChange}
                    value={formik.values.startDate}
                    className="form-control"
                    style={{ border: "1px solid red" }}
                  />
                ) : (
                  <input
                    name="endDate"
                    type="date"
                    onChange={formik.handleChange}
                    value={formik.values.startDate}
                    className="form-control"
                  />
                )}
                {formik.errors.startDate ? (
                  <div className="error">{formik.errors.startDate}</div>
                ) : null}
                <label htmlFor="End date" className="form-label">
                  End Date
                </label>
                {formik.errors.endDate ? (
                  <input
                    name="endDate"
                    type="date"
                    onChange={formik.handleChange}
                    value={formik.values.endDate}
                    className="form-control"
                    style={{ border: "1px solid red" }}
                  />
                ) : (
                  <input
                    name="endDate"
                    type="date"
                    onChange={formik.handleChange}
                    value={formik.values.endDate}
                    className="form-control"
                  />
                )}
                {formik.errors.endDate ? (
                  <div className="error">{formik.errors.endDate}</div>
                ) : null}
                <div className="modButtons">
                  <button type="submit" className="modalButtonStyle">
                    Save
                  </button>
                  <button
                    type="button"
                    className="modalButtonStyle"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
