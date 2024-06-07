import React from "react";
import classes from "./Table.module.css";
import { useNavigate } from "react-router-dom";

import { Table, Row, Col, Button } from "react-bootstrap";

const Table1 = (props) => {
  const navigate = useNavigate();
  const recentJobsHandler = () => {
    navigate("/manage-jobs");
  };
  return (
    <React.Fragment>
<Row className={classes.rowStyle}>
        <Col>
          <h1 className={classes.welcomeBack}>Welcome Back!</h1>
        </Col>
        <Col>
          <Button
            className={`${classes.button} float-end`}
            onClick={recentJobsHandler}
          >
            View All Jobs
          </Button>
        </Col>
      </Row>
      <div>
        {props.jobData.length === 0 && (
          <p className="text-center fw-bold">No jobs data!</p>
        )}
      </div>
    </React.Fragment>
  );
};

export default Table1;
